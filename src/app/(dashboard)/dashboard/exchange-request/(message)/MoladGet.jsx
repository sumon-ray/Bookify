"use client"
import React, { useEffect, useState } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { useSession } from "next-auth/react";
import { ImCross } from "react-icons/im";
import axios from 'axios';
import toast from 'react-hot-toast';

const MoladGet = ({receiver}) => {
    console.log(receiver?.requesterEmail, "NOoooooooooooooooo 9" );
    const { data: session } = useSession();
    const [msgModal, setMsgModal] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const senderEmail = session?.user?.email;

    // Fetch messages whenever the modal opens or the sender/receiver changes
    
    
    if (!receiver?.requesterEmail && msgModal) {
        toast.error("You can't send a message because the request was canceled")   ;
        setMsgModal(false);
    }
    useEffect(() => {
        const fetchMessages = async () => {
            if (senderEmail && receiver) {
                try {
                    const response = await axios.get(`https://bookify-server-lilac.vercel.app/message?senderEmail=${senderEmail}&receiverEmail=${receiver?.requesterEmail}`);
                    setMessages(response.data);
                } catch (err) {
                    console.error("Error loading messages:", err);
                }
            }
        };

        if (msgModal) {
            fetchMessages();
        }
    }, [msgModal, senderEmail, receiver]);

    const handleSendMessage = async () => {
        if (message.trim()) {
            const messageInfo = {
                senderEmail: senderEmail,
                receiverEmail: receiver?.RequesterEmail,
                messageText: message,
                timestamp: new Date(),
            };

            try {
                await axios.post('https://bookify-server-lilac.vercel.app/message', messageInfo);
                setMessage(""); // Clear message input
                setMsgModal(true); // Keep modal open to see the sent message
                setMessages(prev => [...prev, { ...messageInfo, isSender: true }]); // Add new message to the chat view
            } catch (error) {
                console.error("Error sending message:", error);
            }
        }
    };
    return (
        <div>
            <button onClick={() => setMsgModal(!msgModal)}>
                <AiFillMessage className='text-xl text-center absolute left-[34px] top-6' title='Coming soon' />
            </button>

            {msgModal && (
                <div className="fixed inset-0 flex items-end justify-end p-4 bg-black bg-opacity-50 z-50">
                    <div className="flex flex-col flex-grow w-full max-w-[350px] md:min-h-[500px] min-h-[400px] bg-white shadow-xl rounded-lg overflow-hidden">
                        {/* Message Head */}
                        <div className="bg-[#364957] p-4 text-white flex justify-between items-center">
                            <button id="login" className=" rounded-md p-1">
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <circle cx="12" cy="6" r="4" stroke="#ffffff" strokeWidth="1.5"></circle>
                                        <path d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                                    </g>
                                </svg>
                            </button>
                            <span className='text-2xl'>{receiver?.RequesterName}</span>
                            <div className="relative inline-block text-left">
                                <button onClick={() => setMsgModal(false)} id="setting" className=" rounded-md p-1">
                                    <ImCross />
                                </button>
                            </div>
                        </div>

                        {/* Message contents */}
                        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex w-full mt-2 space-x-3 max-w-xs ${msg.senderEmail === senderEmail ? 'ml-auto justify-end' : ''}`}>
                                    {msg.senderEmail !== senderEmail && <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>}
                                    <div className={`p-2 rounded-lg ${msg.senderEmail === senderEmail ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                                        {msg.messageText}
                                    </div>
                                    {msg.senderEmail === senderEmail && <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-300"></div>}
                                </div>
                            ))}
                        </div>

                        {/* Message input */}
                        {/* Message send input  */}
                        <div className="bg-gray-300 p-2">
                            {/* <input
                                className="flex items-center h-10 w-full rounded px-3 text-sm"
                                type="text"
                                placeholder="Type your message…"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Send on Enter
                            /> */}

                            <div className="relative  ">
                                <input
                                    className="bg-[#EFEEE9] w-full border-0 focus:ring-[#EFEEE9] focus:outline-none focus:ring rounded-md py-2 px-4 pr-14"
                                    type="text"
                                    placeholder="Type your message…"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                                    {/* <IoIosSearch
                                        className="text-xl cursor-pointer dark:text-black"
                                    // onClick={handleSearchClick}
                                    /> */}
                                    <div
                                        onClick={handleSendMessage}
                                        className={`bg-[#364957] p-2 px-4 text-white rounded-bl-3xl rounded-md rounded-tl-none cursor-pointer `}>
                                        send
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoladGet;