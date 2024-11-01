'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { PiBooksBold } from 'react-icons/pi';
import { MdAudioFile, MdContactPhone } from 'react-icons/md';
import { TbExchange } from 'react-icons/tb';
import { BiLogOut, BiSolidContact } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import Link from 'next/link';
import { GrDashboard } from 'react-icons/gr';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';



export default function NavbarDrawer() {
    const pathname = usePathname()
    const [open, setOpen] = React.useState(false);
    const checkActive = (route) => {
        return pathname === route
            ? "font-black dark:font-white border-b border-black"
            : "";
    };
    const { data: session, status } = useSession()

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem >
                    <ListItemButton className='hover:bg-[#EFEEE9]'>
                        <Link href={'/'} className={`${checkActive('/')}  flex items-center text-lg gap-x-2`}>
                            <FaHome /> <span>Home</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton className='hover:bg-[#EFEEE9]'>
                        <Link href={'/rentbooks'} className={`${checkActive('/rentbooks')} flex items-center text-black text-lg gap-x-2`}>
                            <PiBooksBold /> <span>Rent Books</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton className='hover:bg-[#EFEEE9]'>
                        <Link href={'/audiobooks'} className={`${checkActive('/audiobooks')} flex items-center text-black text-lg gap-x-2`}>
                            <MdAudioFile /> <span>Audio Book</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton className='hover:bg-[#EFEEE9]'>
                        <Link href={'/exchange'} className={`${checkActive('/exchange')} flex items-center text-black text-lg gap-x-2`}>
                            <TbExchange /> <span>Exchange</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                {
                    session?.user?.email
                    && <ListItem>
                        <ListItemButton className='hover:bg-[#EFEEE9]'>
                            <Link href={'/dashboard'} className={`${checkActive('/dashboard')} flex items-center text-black text-lg gap-x-2`}>
                                <GrDashboard /> <span>Dashboard</span>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                }

                <ListItem>
                    <ListItemButton className='hover:bg-[#EFEEE9]'>
                        <Link href={'/contact'} className={`${checkActive('/contact')} flex items-center text-black text-lg gap-x-2`}>
                            <MdContactPhone /> <span>Contact</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton className='hover:bg-[#EFEEE9]'>
                        <Link href={'/about'} className={`${checkActive('/about')} flex items-center text-black text-lg gap-x-2`}>
                            <BiSolidContact /> <span>About</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                {
                    !session?.user?.email
                    && <ListItem>
                        <ListItemButton className='hover:bg-[#EFEEE9]'>
                            <Link href={'/login'} className={`${checkActive('/login')} flex items-center text-black text-lg gap-x-2`}>
                                <FaSignOutAlt /> <span>Login</span>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                }
                {
                    session?.user?.email
                    && <ListItem>
                        <ListItemButton className='hover:bg-[#EFEEE9]'>
                            <button onClick={() => {
                                signOut()
                                toast.success("Signed out successfully!");
                            }} className={`flex items-center text-black text-lg gap-x-2`}>
                                <BiLogOut /> <span>Logout</span>
                            </button>
                        </ListItemButton>
                    </ListItem>
                }
                {/* <ListItem>
                    <ListItemButton >
                        <Link href={'/singup'} className={`${checkActive('/singup')} flex items-center text-black text-lg gap-x-2`}>
                            <SiSimplelogin /> <span>Sing up</span>
                        </Link >
                    </ListItemButton>
                </ListItem> */}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><GiHamburgerMenu className='text-2xl text-black dark:text-white' /></Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
