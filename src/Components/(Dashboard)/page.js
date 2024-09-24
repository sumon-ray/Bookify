"use client"

import { useContext, useState } from 'react'
import { GrLogout } from 'react-icons/gr'
// import { FcSettings } from 'react-icons/fc'
import { CgProfile } from "react-icons/cg";
// import { MdOutlineSell } from "react-icons/md";
// import { IoGitPullRequestSharp } from "react-icons/io5";
// import { BsFillHouseAddFill } from 'react-icons/bs'
// import { GrUserAdmin } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
// import { BsGraphUp } from 'react-icons/bs'
// import { SiStatista } from "react-icons/si";
// import { NavLink } from 'react-router-dom'
// import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
// import { MdHomeWork } from 'react-icons/md'
import { AuthContext } from '../AuthProvider'
import useRole from '../../hook/useRole'
import MenuItem from './MenuItem'
// import { MdAddTask } from "react-icons/md";
import HostModal from '../HostModal';
import HostMenu from '../../Pages/dashboard/Agent/AgentMenu';
import AdminMenu from '../../Pages/admin/AdminMenu';
import GuestMenu from '../../Pages/guest/GuestMenu';
const DashboardLayout = () => {
  const { logout } = useContext(AuthContext)
  const [isActive, setActive] = useState(false)
  const [role,isLoading]=useRole()
  console.log(role,isLoading);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 text-white flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src='https://themesflat.co/html/homzen/images/logo/logo@2x.png'
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gradient-to-r from-green-100 via-green-200 to-green-100 text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src='https://themesflat.co/html/homzen/images/logo/logo@2x.png'
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
             {/* {
              role==="admin" && <AdminMenu></AdminMenu>
              
             }
             
              {
              role==="agent" && <HostMenu></HostMenu>
              
             }
             {
              role==="guest" && <GuestMenu></GuestMenu>
             } */}
              
            </nav>
          </div>
        </div>

        <div>
          <hr />

         
          <MenuItem
            label='My Profile'
            address='/dashboard/myprofile'
            icon={CgProfile }>
          </MenuItem>
          <button
            onClick={logout}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout



