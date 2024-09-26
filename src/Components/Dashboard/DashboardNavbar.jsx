import { FaBookOpen } from 'react-icons/fa'
import { HiMenuAlt2 } from "react-icons/hi";
import { CgProfile } from 'react-icons/cg'

export default function DashboardNavbar() {
    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-[#EFEEE9]">
                <div className="p-3 lg:px-5 lg:pl-3">

                    <div className="flex items-center justify-between">

                        {/* website logo and other */}
                        <div className="flex items-center justify-start rtl:justify-end">

                            <button type="button" className="p-1 sm:hidden">
                                <HiMenuAlt2 className='text-black text-3xl' />
                            </button>

                            {/* website logo */}
                            <div className="flex items-center">
                                <FaBookOpen className='text-blue-500 text-3xl font-bold' />
                                <h1 className='font-black text-2xl text-blue-500 uppercase -mt-1'>Bookify</h1>
                            </div>

                        </div>

                        {/* user profile and other */}
                        <>
                            <div className="flex items-center ms-3">
                                {/* profile logo */}
                                <div>
                                    <button
                                        type="button"
                                        className="flex text-sm "
                                        aria-expanded="false"
                                        data-dropdown-toggle="dropdown-user">
                                        {/* <span className="sr-only">Open user menu</span> */}
                                        <CgProfile className='text-black font-black text-3xl' />
                                    </button>
                                </div>
                            </div>
                        </>

                    </div>

                </div>
            </nav>
        </div>
    )
}
