// src/app/my-orders/page.jsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import LoadingSpinner from "../myBooks/LoadingSpinner"; // আপনার লোডিং স্পিনারের পাথ

const MyOrdersPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendUrl = "https://bookify-server-five.vercel.app"; // আপনার ব্যাকএন্ডের URL

  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
      return;
    }

    if (!session?.user?.email) {
      // যদি ইউজার লগইন না করে থাকে, তবে তাকে লগইন পেজে রিডাইরেক্ট করুন
      Swal.fire({
        icon: "warning",
        title: "লগইন প্রয়োজন",
        text: "আপনার অর্ডার দেখতে হলে প্রথমে লগইন করুন।",
        confirmButtonText: "লগইন করুন",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        router.push("/login"); // আপনার লগইন পেজের পাথ
      });
      setLoading(false);
      return;
    }

    const fetchMyOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log(
          `Frontend: Fetching orders for user: ${session.user.email}`
        );
        const response = await fetch(
          `${backendUrl}/api/orders/${session.user.email}`
        );
        const data = await response.json();

        if (response.ok && data.success) {
          setOrders(data.orders);
          console.log("Frontend: Orders fetched successfully:", data.orders);
        } else {
          setError(data.error || "অর্ডার লোড করতে ব্যর্থ হয়েছে।");
          console.error("Frontend: Failed to fetch orders:", data.error);
          Swal.fire({
            icon: "error",
            title: "এরর!",
            text: data.error || "আপনার অর্ডার লোড করা সম্ভব হয়নি।",
            confirmButtonText: "ঠিক আছে",
          });
        }
      } catch (err) {
        console.error("Frontend: Network error fetching orders:", err);
        setError("নেটওয়ার্ক ত্রুটি! আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন।");
        Swal.fire({
          icon: "error",
          title: "নেটওয়ার্ক ত্রুটি!",
          text: "অর্ডার লোড করতে পারেনি। আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন।",
          confirmButtonText: "ঠিক আছে",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMyOrders();
  }, [session, status, router, backendUrl]);

  if (loading) {
    return <LoadingSpinner text="আপনার অর্ডার লোড করা হচ্ছে..." />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-20 text-center">
        <p className="text-red-600 text-xl">এরর: {error}</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          হোমপেজে ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary-500">
        আমার অর্ডারসমূহ
      </h1>

      {orders.length === 0 ? (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-5 rounded-lg max-w-md mx-auto shadow-md text-center">
          <p className="text-lg">আপনার কোন অর্ডার নেই।</p>
          <button
            onClick={() => router.push("/all-books")}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            বই কিনতে যান
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                অর্ডার আইডি: {order._id.substring(0, 8)}...
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                তারিখ: {new Date(order.createdAt).toLocaleDateString()}{" "}
                {new Date(order.createdAt).toLocaleTimeString()}
              </p>
              <p className="text-gray-700 font-medium mb-1">
                মোট মূল্য:{" "}
                <span className="text-green-600 font-bold">
                  ৳{order.totalAmount?.toFixed(2)}
                </span>
              </p>
              <p className="text-gray-700 mb-1">
                পেমেন্ট স্ট্যাটাস:{" "}
                <span
                  className={`font-semibold ${
                    order.paymentStatus === "paid"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {order.paymentStatus}
                </span>
              </p>
              <p className="text-gray-700 mb-4">
                অর্ডার স্ট্যাটাস:{" "}
                <span
                  className={`font-semibold ${
                    order.orderStatus === "pending"
                      ? "text-orange-500"
                      : "text-blue-500"
                  }`}
                >
                  {order.orderStatus}
                </span>
              </p>

              <h3 className="text-md font-semibold mb-2 text-gray-700">
                পণ্যের বিবরণ:
              </h3>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                {order.items.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item.name} - পরিমাণ: {item.quantity} - মূল্য: ৳
                    {(item.unit_amount / 100).toFixed(2)} প্রতিটি
                  </li>
                ))}
              </ul>

              <h3 className="text-md font-semibold mb-2 text-gray-700">
                শিপিং তথ্য:
              </h3>
              <div className="text-gray-700 text-sm">
                <p>নাম: {order.shippingInfo.fullName}</p>
                <p>
                  ঠিকানা: {order.shippingInfo.address},{" "}
                  {order.shippingInfo.city}, {order.shippingInfo.postalCode}
                </p>
                <p>দেশ: {order.shippingInfo.country}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyOrdersPage;
