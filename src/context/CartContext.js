// src/context/CartContext.js (Fixed)

"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const currentUserId = session?.user?.email || null;

  const [cartItems, setCartItems] = useState([]);
  const [loadingCart, setLoadingCart] = useState(true);
  const [error, setError] = useState(null);

  const fetchCartFromBackend = useCallback(async (id) => {
    setLoadingCart(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://bookify-server-five.vercel.app/cart/${id}`
      );
      setCartItems(response.data.cart || []);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
      setError("Failed to load cart.");
      setCartItems([]);
    } finally {
      setLoadingCart(false);
    }
  }, []);

  const updateCartOnBackend = useCallback(async (id, items) => {
    try {
      await axios.patch(`https://bookify-server-five.vercel.app/cart/${id}`, {
        cart: items,
      });
    } catch (err) {
      console.error("Failed to update cart on backend:", err);
      setError("Failed to update cart.");
    }
  }, []);

  // --- Add this clearCart function ---
  const clearCart = useCallback(() => {
    setCartItems([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("bookify_cart_anon");
    }
    // যদি ইউজার লগইন করা থাকে, ব্যাকএন্ড কার্টও খালি করুন
    if (currentUserId) {
      updateCartOnBackend(currentUserId, []);
    }
    console.log("CartContext: clearCart called and cart state reset."); // Add a console log for debugging
  }, [currentUserId, updateCartOnBackend]);

  useEffect(() => {
    if (status === "loading") return;

    if (currentUserId) {
      console.log("CartContext: User logged in. User ID:", currentUserId);
      fetchCartFromBackend(currentUserId);
      const savedAnonCart =
        typeof window !== "undefined"
          ? localStorage.getItem("bookify_cart_anon")
          : null;
      if (savedAnonCart) {
        try {
          const anonItems = JSON.parse(savedAnonCart);
          if (anonItems.length > 0) {
            setCartItems((prevItems) => {
              const newItems = [...prevItems];
              anonItems.forEach((anonItem) => {
                const existing = newItems.find(
                  (item) => item._id === anonItem._id
                );
                if (existing) {
                  existing.quantity += anonItem.quantity;
                } else {
                  newItems.push(anonItem);
                }
              });
              return newItems;
            });
          }
          localStorage.removeItem("bookify_cart_anon");
        } catch (e) {
          console.error("Failed to parse anonymous cart:", e);
        }
      }
    } else {
      console.log("CartContext: User not logged in. Loading anonymous cart.");
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("bookify_cart_anon");
        try {
          setCartItems(savedCart ? JSON.parse(savedCart) : []);
        } catch (e) {
          console.error("Failed to parse anonymous cart:", e);
          setCartItems([]);
        }
      }
      setLoadingCart(false);
    }
  }, [currentUserId, fetchCartFromBackend, status]);

  useEffect(() => {
    if (currentUserId) {
      const debounceTimer = setTimeout(() => {
        updateCartOnBackend(currentUserId, cartItems);
      }, 500);
      return () => clearTimeout(debounceTimer);
    } else {
      if (typeof window !== "undefined") {
        localStorage.setItem("bookify_cart_anon", JSON.stringify(cartItems));
      }
    }
  }, [cartItems, currentUserId, updateCartOnBackend]);

  const addToCart = (book) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === book._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...book, quantity: 1, price: book.price || 0 }];
      }
    });
  };

  const removeFromCart = (bookId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== bookId)
    );
  };

  const updateQuantity = (bookId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item._id === bookId ? { ...item, quantity: newQuantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalPages = () => {
    return cartItems.reduce(
      (total, item) => total + (item.totalPage || 0) * (item.quantity || 1),
      0
    );
  };

  const getCartTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total +
          (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 0),
        0
      )
      .toFixed(2);
  };

  const getTotalItemsInCart = () => {
    return cartItems.reduce(
      (total, item) => total + (parseInt(item.quantity) || 0),
      0
    );
  };

  const handleUserLogout = () => {
    // handleUserLogout এখন clearCart এর উপর নির্ভরশীল
    clearCart(); // clearCart কল করুন
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getTotalItemsInCart,
        getTotalPages,
        loadingCart: status === "loading" || loadingCart,
        error,
        handleUserLogout,
        clearCart, // <--- নিশ্চিত করুন clearCart এখানে এক্সপোর্ট করা হয়েছে
        userId: currentUserId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
