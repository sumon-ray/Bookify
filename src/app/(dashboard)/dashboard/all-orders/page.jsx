// src/app/dashboard/all-orders/page.jsx

"use client";

import { useEffect, useState } from "react";
// import { useSession } from 'next-auth/react'; // অথেন্টিকেশন চেক করার জন্য আর প্রয়োজন নেই
import Swal from "sweetalert2";
// import LoadingSpinner from '@/app/myBooks/LoadingSpinner';
import { format } from "date-fns";
import LoadingSpinner from "../myBooks/LoadingSpinner";

const AllOrdersPage = () => {
  // const { data: session, status } = useSession(); // অথেন্টিকেশন চেক করার জন্য আর প্রয়োজন নেই
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ব্যাকএন্ড URL - পরিবেশ ভেরিয়েবল ব্যবহার করা উচিত
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL 

  useEffect(() => {
    // যেহেতু অথেন্টিকেশন চেক থাকছে না, তাই সেশন স্ট্যাটাস লোডিং এর জন্য অপেক্ষা করার দরকার নেই।
    // if (status === 'loading') {
    //     return;
    // }

    // অথেন্টিকেশন চেক সম্পূর্ণভাবে সরানো হয়েছে
    // if (status === 'unauthenticated' || session?.user?.role !== 'admin') {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Access Denied!',
    //         text: 'This page is only available for administrators.',
    //         confirmButtonText: 'Go to Homepage',
    //         confirmButtonColor: '#d33'
    //     }).then(() => {
    //         window.location.href = '/';
    //     });
    //     return;
    // }

    const fetchAllOrders = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${backendUrl}/api/all-orders`, {
          headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${session.accessToken}` // অথেন্টিকেশন না থাকলে এটিও প্রয়োজন নেই
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to load orders.");
        }

        const data = await response.json();
        setOrders(data.orders);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError(err.message);
        Swal.fire({
          icon: "error",
          title: "Data Loading Issue!",
          text: err.message || "Could not load all orders.",
          confirmButtonText: "OK",
        });
      } finally {
        setLoading(false);
      }
    };

    // যেহেতু কোনো রোল চেক থাকছে না, তাই সরাসরি ডেটা ফেচ করুন
    fetchAllOrders();
  }, [backendUrl]); // সেশন স্ট্যাটাস বা সেশন ডেটা এখন আর dependency নয়

  if (loading) {
    return <LoadingSpinner text="Loading Orders..." />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-700">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-white">
        <p>No orders found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8 dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">All Orders</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
          <thead className="bg-gray-50 dark:bg-gray-600">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                User Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Order Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Shipping Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Product Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {order._id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {order.userId || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  ৳{order.totalAmount?.toFixed(2) || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.paymentStatus === "paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.paymentStatus || "N/A"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.orderStatus === "delivered"
                        ? "bg-blue-100 text-blue-800"
                        : order.orderStatus === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.orderStatus || "N/A"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {order.createdAt
                    ? format(new Date(order.createdAt), "dd MMM, hh:mm a")
                    : "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  {order.shippingInfo ? (
                    <>
                      {order.shippingInfo.fullName}
                      <br />
                      {order.shippingInfo.address}, {order.shippingInfo.city}
                      <br />
                      {order.shippingInfo.postalCode},{" "}
                      {order.shippingInfo.country}
                    </>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  {order.items && order.items.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {order.items.map((item, idx) => (
                        <li key={idx}>
                          {item.name} ({item.quantity}x) - ৳
                          {item.unit_amount?.toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrdersPage;
