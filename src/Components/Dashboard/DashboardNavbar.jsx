import { CgProfile } from 'react-icons/cg'
import { GiBookmarklet } from 'react-icons/gi';
import TemporaryDrawer from "./Drawer";

export default function DashboardNavbar() {
    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-white">
                <div className="py-2.5 lg:py-4 pl-4 pr-4">

                    <div className="flex items-center justify-between">

                        {/* website logo and other */}
                        <div className="flex items-center justify-start rtl:justify-end">

                            {/* menu */}
                            <div className="md:hidden">
                                <TemporaryDrawer />
                            </div>

                            {/* bookify logo */}
                            <div className="hidden md:flex items-center text-[#B7B7B7]">
                                <GiBookmarklet className="text-3xl font-bold -mb-1.5" />
                                <h1 className="font-black text-2xl uppercase -mt-1">Bookify</h1>
                            </div>

                        </div>

                        {/* bookify logo */}
                        <div className="flex md:hidden items-center text-[#B7B7B7]">
                            <GiBookmarklet className="text-3xl font-bold -mb-1.5" />
                            <h1 className="font-black text-2xl uppercase -mt-1">Bookify</h1>
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
