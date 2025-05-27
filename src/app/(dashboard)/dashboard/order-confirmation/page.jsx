// src/app/order-confirmation/page.jsx
"use client";

import { Button } from "@/Components/ui/Button";
import { useCart } from "@/context/CartContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import LoadingSpinner from "../myBooks/LoadingSpinner";

const OrderConfirmationPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();

  const [orderStatus, setOrderStatus] = useState("processing");
  const [orderInfo, setOrderInfo] = useState(null);
  const [error, setError] = useState(null);

  // ব্যাকএন্ড URL সরাসরি সেট করা হয়েছে, যা আপনার লোকাল ডেভলপমেন্টের জন্য ঠিক আছে।
  // প্রোডাকশনের জন্য process.env.NEXT_PUBLIC_BACKEND_URL ব্যবহার করা উচিত।
  const backendUrl = "https://bookify-server-five.vercel.app";

  useEffect(() => {
    if (!sessionId) {
      setError("অর্ডার সেশন আইডি পাওয়া যায়নি।");
      setOrderStatus("failed");
      Swal.fire({
        icon: "error",
        title: "অর্ডার ব্যর্থ!",
        text: "অর্ডার সেশন আইডি পাওয়া যায়নি। সম্ভবত আপনি সরাসরি এই পৃষ্ঠায় এসেছেন বা একটি ত্রুটি ঘটেছে।",
        confirmButtonText: "হোমপেজে যান",
        confirmButtonColor: "#d33",
      }).then(() => {
        router.push("/"); // sessionId না থাকলে হোমপেজে রিডাইরেক্ট করুন
      });
      return;
    }

    const confirmOrder = async () => {
      try {
        console.log(
          `Frontend: Attempting to confirm order with sessionId: ${sessionId} at ${backendUrl}/api/confirm-order`
        );
        const response = await fetch(`${backendUrl}/api/confirm-order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        });

        // রেসপন্স স্ট্যাটাস চেক করুন
        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json();
          } catch (jsonError) {
            // যদি রেসপন্স JSON না হয়
            console.error(
              "Frontend: Error parsing error response as JSON:",
              jsonError
            );
            setError(
              `সার্ভার ত্রুটি: ${response.status} ${response.statusText}.`
            );
            setOrderStatus("failed");
            Swal.fire({
              icon: "error",
              title: "অর্ডার ব্যর্থ!",
              text: `সার্ভার থেকে অপ্রত্যাশিত প্রতিক্রিয়া: ${response.status} ${response.statusText}। বিস্তারিত জানতে ব্রাউজার কনসোল দেখুন।`,
              confirmButtonText: "পুনরায় চেষ্টা করুন",
              confirmButtonColor: "#d33",
            });
            return; // JSON পার্স করতে ব্যর্থ হলে এখানেই শেষ
          }

          // যদি রেসপন্স JSON হয় কিন্তু response.ok না হয়
          console.error(
            "Frontend: Backend returned non-OK response:",
            response.status,
            errorData
          );
          setError(errorData.error || "অর্ডার নিশ্চিত করতে সমস্যা হয়েছে।");
          setOrderStatus("failed");
          Swal.fire({
            icon: "error",
            title: "অর্ডার ব্যর্থ!",
            text: errorData.error || "আপনার অর্ডার নিশ্চিত করা সম্ভব হয়নি।",
            confirmButtonText: "পুনরায় চেষ্টা করুন",
            confirmButtonColor: "#d33",
          });
          return; // সফল রেসপন্স না হলে এখানেই শেষ
        }

        // রেসপন্স ঠিক থাকলে JSON পার্স করুন
        const data = await response.json();
        console.log(
          "Frontend: Order confirmation successful, received data:",
          data
        );

        setOrderStatus("success");
        setOrderInfo(data.order);
        clearCart();
        Swal.fire({
          icon: "success",
          title: "আপনার অর্ডার সফল!",
          text: "আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে এবং নিশ্চিত করা হয়েছে।",
          confirmButtonText: "ঠিক আছে",
          confirmButtonColor: "#3085d6",
        });
      } catch (err) {
        console.error("Frontend: Error during order confirmation fetch:", err);
        // এটি সেই 'নেটওয়ার্ক সমস্যা' যখন fetch API নিজেই ব্যর্থ হয় (যেমন CORS, নো ইন্টারনেট, ভুল URL)
        setError("নেটওয়ার্ক সমস্যা বা সার্ভার সংযোগ ত্রুটি।");
        setOrderStatus("failed");
        Swal.fire({
          icon: "error",
          title: "নেটওয়ার্ক সমস্যা!",
          text: "অর্ডার নিশ্চিত করতে পারেনি। আপনার ইন্টারনেট সংযোগ বা সার্ভার ঠিকানা পরীক্ষা করুন।",
          confirmButtonText: "ঠিক আছে",
          confirmButtonColor: "#d33",
        });
      }
    };

    confirmOrder();
  }, [sessionId, clearCart, router, backendUrl]);

  if (orderStatus === "processing") {
    return <LoadingSpinner text="আপনার অর্ডার নিশ্চিত করা হচ্ছে..." />;
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 text-center">
      {orderStatus === "success" && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-5 rounded-lg max-w-md mx-auto shadow-md">
          <svg
            className="w-16 h-16 mx-auto text-green-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h1 className="text-3xl font-bold mb-3">অর্ডার সফল!</h1>
          <p className="text-lg mb-4">আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে।</p>
          {orderInfo && (
            <div className="text-left bg-green-50 p-4 rounded-md">
              <p>
                <strong>অর্ডার আইডি:</strong> {orderInfo._id || "N/A"}
              </p>
              <p>
                <strong>মোট মূল্য:</strong> ৳
                {orderInfo.totalAmount?.toFixed(2) || "N/A"}
              </p>
              <p>
                <strong>ইমেল:</strong> {orderInfo.userId || "N/A"}
              </p>
            </div>
          )}
          <Button
            onClick={() => router.push("/dashboard/my-orders")}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            আমার অর্ডার দেখুন
          </Button>
        </div>
      )}

      {orderStatus === "failed" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-5 rounded-lg max-w-md mx-auto shadow-md">
          <svg
            className="w-16 h-16 mx-auto text-red-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h1 className="text-3xl font-bold mb-3">অর্ডার ব্যর্থ!</h1>
          <p className="text-lg mb-4">
            {error || "আপনার অর্ডার নিশ্চিত করা সম্ভব হয়নি।"}
          </p>
          <Button
            onClick={() => router.push("/dashboard/checkout")}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            আবার চেষ্টা করুন
          </Button>
        </div>
      )}
    </section>
  );
};

export default OrderConfirmationPage;
