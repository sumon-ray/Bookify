'use client'
import { CgProfile } from 'react-icons/cg'
import { GiBookmarklet } from 'react-icons/gi';
import TemporaryDrawer from "./Drawer";
import { usePathname } from 'next/navigation';
import { IoIosSearch, IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineKeyboardVoice } from 'react-icons/md';
import { useSearchContext } from '@/app/(dashboard)/dashboard/myBooks/SearchProvider';
import Link from 'next/link';

export default function DashboardNavbar() {

    let pathName = usePathname().split('/')
    pathName = pathName[pathName.length - 1]

    const { setSearchQuery } = useSearchContext();  

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);  
        console.log(e.target.value)
    };

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
                            <Link href={'/'} className="hidden md:flex items-center text-[#B7B7B7]">
                                <GiBookmarklet className="text-3xl font-bold -mb-1.5" />
                                <h1 className="font-black text-2xl uppercase -mt-1">Bookify</h1>
                            </Link>

                            {/* active route name show */}
                            <h3 className='text-xl font-bold pl-8 uppercase hidden md:block'>{pathName}</h3>

                        </div>

                        {/* input logo */}
                        <div className='hidden md:flex items-center'>
  <input 
    className='bg-[#EFEEE9CC] border-0 rounded-md pr-16' 
    type="text" 
    placeholder='Search...'
    onChange={handleSearch}  // Add this line to bind the search input
  />
  <div className='flex items-center gap-1 -ml-[65px]'>
    <IoIosSearch className='text-xl' />
    <div className='bg-[#0000001A] p-2.5 rounded-bl-3xl rounded-md rounded-tl-none'>
      <MdOutlineKeyboardVoice className='text-xl text-black' />
    </div>
  </div>
</div>



                        {/* bookify logo */}
                        <div className="flex md:hidden items-center text-[#B7B7B7]">
                            <GiBookmarklet className="text-3xl font-bold -mb-1.5" />
                            <h1 className="font-black text-2xl uppercase -mt-1">Bookify</h1>
                        </div>

                        {/* user profile and other */}
                        <div className="flex items-center gap-4">
                            {/* notification */}
                            <p><IoMdNotificationsOutline className='text-2xl' /></p>
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

                    </div>

                </div>
            </nav>
        </div>
    )
}
