"use client"
import React, { useState } from 'react';
import { AiFillMessage } from 'react-icons/ai';

const Modal = () => {
    const [msgModal, setMsgModal] = useState(false);
    const [message, setMessage] = useState("");

    // Sample messages for display
    const messages = [
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", isSender: false, time: "2 min ago" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", isSender: true, time: "2 min ago" },
        { text: "Lorem ipsum dolor sit amet.", isSender: true, time: "2 min ago" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", isSender: false, time: "2 min ago" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", isSender: true, time: "2 min ago" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", isSender: true, time: "2 min ago" },
        { text: "Lorem ipsum dolor sit amet.", isSender: true, time: "2 min ago" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", isSender: false, time: "2 min ago" },
        { text: "Lorem ipsum dolor sit.", isSender: true, time: "2 min ago" },
    ];

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log("Message sent:", message);
            // Optionally, you could add the message to your messages state or send it to a backend here.
            setMessage(""); // Clear the message input
        }
    };

    return (
        <div>
            <button onClick={() => setMsgModal(!msgModal)}>
                <AiFillMessage className='text-xl text-center absolute left-[34px] top-6' title='Coming soon' />
            </button>

            {msgModal && (
                <div className="fixed inset-0 flex items-end justify-end p-4 bg-black bg-opacity-50 z-50">
                    <div className="flex flex-col flex-grow w-full max-w-[350px] md:min-h-[500px] min-h-[400px]  bg-white shadow-xl rounded-lg overflow-hidden">
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
                            <span className='text-2xl'>Messages</span>
                            <div className="relative inline-block text-left">
                                <button id="setting" className=" rounded-md p-1">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.1395 12.0002C14.1395 13.1048 13.2664 14.0002 12.1895 14.0002C11.1125 14.0002 10.2395 13.1048 10.2395 12.0002C10.2395 10.8957 11.1125 10.0002 12.1895 10.0002C13.2664 10.0002 14.1395 10.8957 14.1395 12.0002Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.57381 18.1003L5.12169 12.8133C4.79277 12.2907 4.79277 11.6189 5.12169 11.0963L7.55821 5.89229C7.93118 5.32445 8.55898 4.98876 9.22644 5.00029H12.1895H15.1525C15.8199 4.98876 16.4477 5.32445 16.8207 5.89229L19.2524 11.0923C19.5813 11.6149 19.5813 12.2867 19.2524 12.8093L16.8051 18.1003C16.4324 18.674 15.8002 19.0133 15.1281 19.0003H9.24984C8.5781 19.013 7.94636 18.6737 7.57381 18.1003Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                    </svg>
                                </button>
                                <div id="dropdown-content" className="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg p-2">
                                    <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M9 21H12M15 21H12M12 21V18M12 18H19C20.1046 18 21 17.1046 21 16V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V16C3 17.1046 3.89543 18 5 18H12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </g>
                                        </svg>
                                        Appearance
                                    </a>
                                    <a href="#" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47327 20.2388 6.40078 20.1002C6.31741 19.9408 6.37644 19.6627 6.49448 19.1064L7.43426 14.6757C7.46919 14.5112 7.48656 14.429 7.47829 14.3503C7.47105 14.2807 7.44908 14.2134 7.41404 14.1527C7.37452 14.0842 7.31202 14.0279 7.18726 13.9154L3.82254 10.8832C3.4002 10.5025 3.18894 10.3122 3.16273 10.1342C3.13991 9.97956 3.19074 9.82316 3.30003 9.71147C3.42684 9.58288 3.70951 9.55304 4.27506 9.49336L8.77935 9.01795C8.94653 9.00031 9.03016 8.99149 9.10243 8.95929C9.16626 8.93081 9.22356 8.8892 9.27035 8.83718C9.32331 8.77839 9.35759 8.70162 9.4261 8.54808L11.2691 4.41115Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </g>
                                        </svg>
                                        Notifications
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex w-full mt-2 space-x-3 max-w-xs ${msg.isSender ? 'ml-auto justify-end' : ''}`}>
                                    {!msg.isSender && <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>}
                                    <div>
                                        <div className={`p-3 rounded-lg ${msg.isSender ? 'bg-blue-600 text-white rounded-l-lg rounded-br-lg' : 'bg-gray-300 rounded-r-lg rounded-bl-lg'}`}>
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                        <span className="text-xs text-gray-500 leading-none">{msg.time}</span>
                                    </div>
                                    {msg.isSender && <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>}
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-300 p-4">
                            <input
                                className="flex items-center h-10 w-full rounded px-3 text-sm"
                                type="text"
                                placeholder="Type your message…"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Send on Enter
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
