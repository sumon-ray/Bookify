"use client"; 

import React from 'react';
import { useRouter } from 'next/navigation'; // নেভিগেশনের জন্য
import Image from 'next/image'; // ইমেজ প্রদর্শনের জন্য
import { Button } from '@/Components/ui/Button'; // আপনার UI বাটন কম্পোনেন্ট
import { useCart } from '@/context/CartContext';
// ধরে নিচ্ছি আপনার কাছে এই useCart হুকটি আছে
// src/hooks/useCart.js পাথে থাকতে পারে
// import { useCart } from '../../hooks/useCart'; // আপনার useCart হুক ইম্পোর্ট করুন
// অথবা আপনার useCart হুক যেখান থেকে এক্সপোর্ট করা হয়েছে সেই পাথ দিন

const MyCartpage = () => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPages } = useCart();
    const router = useRouter();

    // যদি আপনার কার্টে মূল্য থাকে, তাহলে getTotalPrice ফাংশন ব্যবহার করতে পারেন
    // const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
    // const totalAmount = getTotalPrice();


    const handleProceedToCheckout = () => {
        // ব্যবহারকারীকে /checkout পেজে রিডাইরেক্ট করুন
        router.push('/dashboard/checkout');
    };

    return (
        <section className="container mx-auto px-4 py-8">
            {/* <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">আমার কার্ট</h1> */}

            {cartItems.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-lg text-gray-600 dark:text-gray-400">আপনার কার্ট খালি। কোনো বই যোগ করা হয়নি!</p>
                    <Button
                        onClick={() => router.push('/all-books')} // হোমপেজে ফিরে যাওয়ার জন্য
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        বই খুঁজতে যান
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* কার্ট আইটেমগুলো */}
                    <div className="md:col-span-2 bg-white dark:bg-[#272727CC] shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">কার্টের জিনিসপত্র</h2>
                        {cartItems.map((item) => (
                            <div key={item._id} className="flex items-center border-b border-gray-200 dark:border-gray-700 py-4 last:border-b-0">
                                <div className="relative w-24 h-32 mr-4 flex-shrink-0">
                                    <Image
                                        src={item.coverImage}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">লেখক: {item.author || 'অজানা'}</p>
                                    <p className="text-gray-600 dark:text-gray-400">পৃষ্ঠা: {item.totalPage || 'N/A'}</p>
                                    {/* যদি মূল্য থাকে */}
                                    {/* <p className="text-gray-700 font-semibold dark:text-gray-300">মূল্য: ${item.price?.toFixed(2) || '0.00'}</p> */}

                                    {/* পরিমাণ পরিবর্তনের অপশন (যদি প্রয়োজন হয়) */}
                                    {/* <div className="flex items-center mt-2">
                                        <label htmlFor={`quantity-${item._id}`} className="mr-2 text-gray-700 dark:text-gray-300">পরিমাণ:</label>
                                        <input
                                            id={`quantity-${item._id}`}
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                                            className="w-16 p-1 border rounded-md text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
                                        />
                                    </div> */}
                                </div>
                                <Button
                                    onClick={() => removeFromCart(item._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-md transition-colors duration-200"
                                >
                                    সরান
                                </Button>
                            </div>
                        ))}
                    </div>

                    {/* কার্ট সারসংক্ষেপ */}
                    <div className="md:col-span-1 bg-white dark:bg-[#272727CC] shadow-md rounded-lg p-6 h-fit">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">কার্ট সারসংক্ষেপ</h2>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 dark:text-gray-300">মোট বই:</span>
                            <span className="font-bold text-gray-900 dark:text-gray-100">{cartItems.length}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-700 dark:text-gray-300">মোট পৃষ্ঠা:</span>
                            <span className="font-bold text-lg text-gray-900 dark:text-gray-100">{getTotalPages()}</span>
                            {/* যদি মূল্য থাকে */}
                            {/* <span className="font-bold text-lg text-gray-900 dark:text-gray-100">${totalAmount?.toFixed(2)}</span> */}
                        </div>

                        <Button
                            onClick={handleProceedToCheckout}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg text-xl transition-colors duration-300"
                        >
                            চেকআউট করুন
                        </Button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MyCartpage;