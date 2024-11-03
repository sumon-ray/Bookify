"use client"
import { BsChatLeftText } from "react-icons/bs";
import { GrSend } from "react-icons/gr";
import Swal from "sweetalert2";


export default function page() {

    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for contact us",
            showConfirmButton: false,
            timer: 1500
        });
        e.target.reset()
    }


    return (
        <section className="my-7 md:pt-20">
            <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-20 dark:text-white md:min-h-[82vh] px-5 md:px-0">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    <div className="bg-[#EFEEE9CC] dark:bg-[#272727] p-4 md:p-8 rounded-2xl">
                        <span className="inline-block p-3 text-[#000000] dark:text-white rounded-full bg-[#36495740] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </span>

                        <h2 className="mt-2.5 font-black text-black dark:text-white">
                            Email
                        </h2>
                        <p className="mt-2 text-sm">
                            Our friendly team is here to help.
                        </p>
                        <p className="mt-2 text-sm text-black dark:text-white">
                            bookify@gmail.com
                        </p>
                    </div>

                    <div className="bg-[#EFEEE9CC] dark:bg-[#272727] p-4 md:p-8 rounded-2xl  dark:text-white">
                        <span className="inline-block p-3 text-[#000000] dark:text-white rounded-full bg-[#36495740] ">
                            <BsChatLeftText className="text-xl" />
                        </span>

                        <h2 className="mt-2.5 font-black  ">
                            Live chat
                        </h2>
                        <p className="mt-2 text-sm">
                            Our friendly team is here to help.
                        </p>
                        <p className="mt-2 text-sm text-black dark:text-white">
                            Start new chat
                        </p>
                    </div>

                    <div className="bg-[#EFEEE9CC] dark:bg-[#272727] p-4 dark:text-white md:p-8 rounded-2xl">
                        <span className="inline-block p-3 text-[#000000] dark:text-white rounded-full bg-[#36495740] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                        </span>

                        <h2 className="mt-2.5 font-black">
                            Office
                        </h2>
                        <p className="mt-2 text-sm">
                            Come say hello at our office HQ.
                        </p>
                        <p className="mt-2 text-sm ">
                            Dhaka,Bangladesh
                        </p>
                    </div>

                    <div className="bg-[#EFEEE9CC] md:p-8 rounded-2xl  p-4 dark:bg-[#272727] dark:text-white">
                        <span className="inline-block p-3 text-[#000000] rounded-full dark:text-white bg-[#36495740] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                        </span>

                        <h2 className="mt-2.5 font-black">
                            Phone
                        </h2>
                        <p className="mt-2 text-sm">
                            Mon-Fri from 8am to 5pm.
                        </p>
                        <p className="mt-2 text-sm">
                            +1 (555) 000-0000
                        </p>
                    </div>

                </div>

                <div className="md:p-4 rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm font-bold">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="block w-full px-5 py-2.5 mt-2 placeholder-gray-400   bg-white rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#272727A6] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0"
                                    required />
                            </div>

                            <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm font-bold">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="block w-full px-5 py-2.5 mt-2  dark:text-black placeholder-gray-400  bg-white border border-gray-300 rounded-lg  focus:ring-[#EFEEE999] text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#272727A6] dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0"
                                    required />
                            </div>
                        </div>

                        <div className="mt-2.5">
                            <label className="block mb-2 text-sm font-bold">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="block w-full px-5 py-2.5 mt-2 placeholder-gray-400 bg-white rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#272727A6] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0"
                                required />
                        </div>

                        <div className="w-full mt-2.5">
                            <label className="block mb-2 text-sm font-bold">
                                Message
                            </label>
                            <textarea
                                className="block resize-none w-full h-44 px-5 py-2.5 mt-2 placeholder-gray-400 bg-white rounded-lg border border-gray-300 text-black focus:ring-[#EFEEE9] focus:outline-none focus:ring focus:border-[#EFEEE9] pl-2.5 dark:bg-[#272727A6] dark:text-white dark:placeholder-white dark:border-0 dark:focus:border-0 dark:focus:ring-0"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>

                        <button className="flex items-center justify-between w-full px-6 py-3 mt-4 text-white text-sm font-bold bg-[#364957] dark:bg-[#272727A6] dark:text-white rounded-md">
                            <span>Send Message </span>
                            <GrSend className="text-xl" />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}
