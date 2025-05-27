// src/app/checkout/page.jsx

"use client";

import { Button } from "@/Components/ui/Button";
import { useCart } from "@/context/CartContext"; // useCart হুকের সঠিক পাথ
import { loadStripe } from "@stripe/stripe-js"; // Stripe.js লাইব্রেরি ইম্পোর্ট করুন
import axios from "axios"; // axios ইম্পোর্ট করুন
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import LoadingSpinner from "../myBooks/LoadingSpinner"; // LoadingSpinner এর সঠিক পাথ

// Stripe Publishable Key লোড করুন
// নিশ্চিত করুন NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY আপনার .env.local ফাইলে আছে
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutPage = () => {
  const {
    cartItems,
    getCartTotal,
    getTotalItemsInCart,
    loadingCart,
    error: cartError,
    clearCart, // <--- নিশ্চিত করুন আপনার useCart হুকে clearCart ফাংশনটি আছে
    userId, // <--- যদি useCart হুকে userId থাকে তবে সেটি নিন
  } = useCart();
  const router = useRouter();

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [processingOrder, setProcessingOrder] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);

  // .env ফাইল থেকে আপনার ব্যাকএন্ড URL নিন
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL

  // Redirect if cart is empty aFfter initial load
  useEffect(() => {
    if (!loadingCart && cartItems.length === 0) {
      Swal.fire({
        icon: "info",
        title: "আপনার কার্ট খালি!",
        text: "চেকআউট করার আগে অনুগ্রহ করে কিছু বই আপনার কার্টে যোগ করুন।",
        confirmButtonText: "বই খুঁজতে যান",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        router.push("/"); // Redirect to homepage or books page
      });
    }
  }, [cartItems, loadingCart, router]);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setProcessingOrder(true);
    setCheckoutError(null);

    // Basic validation
    if (cartItems.length === 0) {
      setCheckoutError("আপনার কার্ট খালি!");
      setProcessingOrder(false);
      return;
    }

    if (
      !shippingInfo.fullName ||
      !shippingInfo.address ||
      !shippingInfo.city ||
      !shippingInfo.postalCode ||
      !shippingInfo.country
    ) {
      setCheckoutError("অনুগ্রহ করে সকল শিপিং তথ্য পূরণ করুন।");
      setProcessingOrder(false);
      return;
    }

    try {
      const orderData = {
        cartItems: cartItems.map((item) => ({
          _id: item._id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
          coverImage: item.coverImage,
          author: item.author,
        })),
        shippingInfo: shippingInfo,
        totalAmount: parseFloat(getCartTotal()),
        userId: userId, // useCart থেকে আসা userId
      };

      if (paymentMethod === "stripe") {
        const response = await axios.post(
          `${backendUrl}/api/create-checkout-session`,
          orderData
        );

        if (response.data && response.data.payment_url) {
          const stripe = await stripePromise;
          if (stripe) {
            // Stripe Checkout পেজে রিডাইরেক্ট করুন
            // আপনার ব্যাকএন্ড থেকে payment_url না পাঠিয়ে session.id পাঠালে ভালো।
            // আপনার ব্যাকএন্ড কোড `res.json({ payment_url: session.url });` দিচ্ছে,
            // যা `redirectToCheckout` এর পরিবর্তে সরাসরি `window.location.href` ব্যবহার করতে হবে।
            window.location.href = response.data.payment_url;

            // অথবা, যদি ব্যাকএন্ড `sessionId` পাঠাতো:
            // const { sessionId } = response.data;
            // const result = await stripe.redirectToCheckout({ sessionId: sessionId });
            // if (result.error) {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Stripe ত্রুটি!',
            //         text: result.error.message,
            //         confirmButtonColor: '#d33'
            //     });
            // }
          } else {
            setCheckoutError("Stripe লোড করতে সমস্যা হয়েছে।");
          }
        } else {
          setCheckoutError("Stripe পেমেন্ট শুরু করা যায়নি।");
        }
      } else if (paymentMethod === "cod") {
        // ক্যাশ অন ডেলিভারির জন্য ব্যাকএন্ডে অর্ডার তৈরি করুন
        const response = await axios.post(
          `${backendUrl}/api/place-cod-order`,
          orderData
        ); // এই এন্ডপয়েন্টটি আপনার ব্যাকএন্ডে থাকতে হবে

        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: "অর্ডার সফলভাবে নিশ্চিত হয়েছে!",
            text: `আপনার ${getTotalItemsInCart()}টি আইটেমের অর্ডার সফলভাবে সম্পন্ন হয়েছে।`,
            confirmButtonText: "ঠিক আছে",
            confirmButtonColor: "#3085d6",
          }).then(() => {
            clearCart(); // কার্ট খালি করুন
            router.push("/order-confirmation");
          });
        } else {
          setCheckoutError(
            response.data.message ||
              "ক্যাশ অন ডেলিভারি অর্ডার দিতে সমস্যা হয়েছে।"
          );
        }
      } else {
        setCheckoutError("অনুগ্রহ করে একটি পেমেন্ট পদ্ধতি নির্বাচন করুন।");
      }
    } catch (error) {
      console.error("অর্ডার সাবমিট করতে সমস্যা:", error);
      setCheckoutError(
        "অর্ডার দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
      );
      Swal.fire({
        icon: "error",
        title: "অর্ডার ব্যর্থ!",
        text: "অর্ডার দেওয়ার সময় কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
        confirmButtonText: "ঠিক আছে",
        confirmButtonColor: "#d33",
      });
    } finally {
      setProcessingOrder(false);
    }
  };

  if (loadingCart) {
    return <LoadingSpinner />;
  }

  if (cartError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">কার্ট লোড করতে সমস্যা: {cartError}</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        চেকআউট
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-1 bg-white dark:bg-[#272727CC] shadow-lg rounded-lg p-6 order-last lg:order-first">
          <h2 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-gray-200 border-b pb-3">
            আপনার অর্ডার
          </h2>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <div className="flex items-center">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  width={50}
                  height={70}
                  objectFit="cover"
                  className="rounded mr-3"
                />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    {item.title}{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      x {item.quantity}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ৳{item.price?.toFixed(2) || "0.00"}
                  </p>
                </div>
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                ৳{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                মোট আইটেম:
              </span>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {getTotalItemsInCart()}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                মোট মূল্য:
              </span>
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                ৳{getCartTotal()}
              </span>
            </div>
          </div>
        </div>

        {/* Shipping and Payment Form */}
        <div className="lg:col-span-2 bg-white dark:bg-[#272727CC] shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-gray-200 border-b pb-3">
            শিপিং ও পেমেন্ট
          </h2>

          {checkoutError && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <strong className="font-bold">ভুল!</strong>
              <span className="block sm:inline"> {checkoutError}</span>
            </div>
          )}

          <form onSubmit={handleSubmitOrder}>
            {/* Shipping Information */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">
                শিপিং তথ্য
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                  >
                    পুরো নাম
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={shippingInfo.fullName}
                    onChange={handleShippingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                  >
                    ঠিকানা
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                  >
                    শহর
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="postalCode"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                  >
                    পোস্টাল কোড
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={shippingInfo.postalCode}
                    onChange={handleShippingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    required
                  />
                </div>
                <div className="mb-4 md:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                  >
                    দেশ
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleShippingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">
                পেমেন্ট পদ্ধতি
              </h3>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="paymentMethod"
                    value="stripe"
                    checked={paymentMethod === "stripe"}
                    onChange={handlePaymentMethodChange}
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    ক্রেডিট/ডেবিট কার্ড (Stripe)
                  </span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio text-blue-600"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={handlePaymentMethodChange}
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    ক্যাশ অন ডেলিভারি (COD)
                  </span>
                </label>
                {/* PayPal অপশন আপাতত বাদ দেওয়া হয়েছে, কারণ আপনার ব্যাকএন্ড PayPal হ্যান্ডেল করছে না */}
                {/* <label className="inline-flex items-center ml-6">
                                    <input
                                        type="radio"
                                        className="form-radio text-blue-600"
                                        name="paymentMethod"
                                        value="paypal"
                                        checked={paymentMethod === "paypal"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                                        পেপাল (PayPal)
                                    </span>
                                </label> */}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                * এই ডেমো কার্যকারিতা শুধুমাত্র সিমুলেটেড। বাস্তব পেমেন্ট
                গেটওয়ে ইন্টিগ্রেশনের প্রয়োজন হবে।
              </p>
            </div>

            {/* Place Order Button */}
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg text-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={processingOrder || cartItems.length === 0}
            >
              {processingOrder ? (
                <span className="flex items-center justify-center">
                  <LoadingSpinner size="sm" />
                  <span className="ml-2">অর্ডার প্রক্রিয়াকরণ হচ্ছে...</span>
                </span>
              ) : (
                `অর্ডার নিশ্চিত করুন (৳${getCartTotal()})`
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
