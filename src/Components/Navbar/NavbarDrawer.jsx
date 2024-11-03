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
import { MdContactPhone } from 'react-icons/md';
import { TbExchange } from 'react-icons/tb';
import { BiLogOut, BiSolidContact } from "react-icons/bi";
import Link from 'next/link';
import { GrDashboard } from 'react-icons/gr';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FaRegFileAudio } from 'react-icons/fa6';
import { PiBooksFill } from 'react-icons/pi';


export default function NavbarDrawer() {
    const { theme } = useTheme();
    const pathname = usePathname()
    const [open, setOpen] = React.useState(false);
    const checkActive = (route) => {
        return pathname === route
            ? `font-black ${theme === 'dark' ? 'text-white border-white' : 'border-black'} border-b`
            : "";
    };
    const { data: session, status } = useSession()

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>

            <List>
                <ListItem>
                    <ListItemButton sx={{
                        '&:hover': {
                            backgroundColor: theme === 'dark' ? '#333333' : '#EFEEE9',  // Dark mode hover color
                        },
                    }}>
                        <Link href={'/'} style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} className={`${checkActive('/')}  flex items-center text-lg gap-x-2`}>
                            <FaHome /> <span>Home</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem >
                    <ListItemButton sx={{
                        '&:hover': {
                            backgroundColor: theme === 'dark' ? '#333333' : '#EFEEE9',  // Dark mode hover color
                        },
                    }}>
                        <Link style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} href={'/exchange'} className={`${checkActive('/exchange')} flex items-center text-black text-lg gap-x-2`}>
                            <TbExchange /> <span>Exchange</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem >
                    <ListItemButton sx={{
                        '&:hover': {
                            backgroundColor: theme === 'dark' ? '#333333' : '#EFEEE9',  // Dark mode hover color
                        },
                    }}>
                        <Link style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} href={'/audiobooks/671e8aa0cc79bac9d2cf7419'} className={`${checkActive('/audiobooks/671e8aa0cc79bac9d2cf7419')} flex items-center text-black text-lg gap-x-2`}>
                            <FaRegFileAudio/> <span>Audio books</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem >
                    <ListItemButton sx={{
                        '&:hover': {
                            backgroundColor: theme === 'dark' ? '#333333' : '#EFEEE9',  // Dark mode hover color
                        },
                    }}>
                        <Link style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} href={'/all-books'} className={`${checkActive('/all-books')} flex items-center text-black text-lg gap-x-2`}>
                            <PiBooksFill /> <span>All books</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                {
                    session?.user?.email
                    && <ListItem >
                        <ListItemButton sx={{
                            '&:hover': {
                                backgroundColor: theme === 'dark' ? '#333333' : '#EFEEE9',  // Dark mode hover color
                            },
                        }}>
                            <Link style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} href={'/dashboard'} className={`${checkActive('/dashboard')} flex items-center text-black text-lg gap-x-2`}>
                                <GrDashboard /><span>dashboard</span>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                }

                <ListItem >
                    <ListItemButton sx={{
                        '&:hover': {
                            backgroundColor: theme === 'dark' ? '#333333' : '#EFEEE9',  // Dark mode hover color
                        },
                    }}>
                        <Link style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} href={'/contact'} className={`${checkActive('/contact')} flex items-center text-black text-lg gap-x-2`}>
                            <MdContactPhone /> <span>Contact</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem >
                    <ListItemButton sx={{
                        '&:hover': {
                            backgroundColor: theme === 'dark' ? '#333333' : '#EFEEE9',  // Dark mode hover color
                        },
                    }}>
                        <Link href={'/about'} style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} className={`${checkActive('/about')} flex items-center text-black text-lg gap-x-2`}>
                            <BiSolidContact /> <span>About</span>
                        </Link>
                    </ListItemButton>
                </ListItem>

                {
                    !session?.user?.email
                    && <ListItem>
                        <ListItemButton sx={{
                            '&:hover': {
                                backgroundColor: theme === 'dark' ? '#333333' : '#EFEEE9',  // Dark mode hover color
                            },
                        }}>
                            <Link style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} href={'/login'} className={`${checkActive('/login')} flex items-center text-black text-lg gap-x-2`}>
                                <FaSignOutAlt /> <span>Login</span>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                }
                {
                    session?.user?.email
                    && <ListItem>
                        <ListItemButton sx={{
                            '&:hover': {
                                backgroundColor: theme === 'dark' ? '#333333' : '#EFEEE9',  // Dark mode hover color
                            },
                        }}>
                            <button style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }} onClick={() => {
                                signOut()
                                toast.success("Signed out successfully!");
                            }} className={`flex items-center text-black text-lg gap-x-2`}>
                                <BiLogOut /> <span>Logout</span>
                            </button>
                        </ListItemButton>
                    </ListItem>
                }
            </List>

        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><GiHamburgerMenu className='text-2xl text-black dark:text-white' /></Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: theme === 'dark' ? '#272727A6' : '#ffffff',
                        color: theme === 'dark' ? '#ffffff' : '#000000',
                    },
                }}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
