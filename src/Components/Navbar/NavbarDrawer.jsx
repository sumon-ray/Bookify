import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { PiBooksBold } from 'react-icons/pi';
import { MdAudioFile, MdContactPhone } from 'react-icons/md';
import { TbExchange } from 'react-icons/tb';
import { BiSolidContact } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { SiSimplelogin } from 'react-icons/si';



export default function NavbarDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem>
                    <ListItemButton className='flex items-center text-black text-lg gap-x-2'>
                        <FaHome /> <span>Home</span>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton className='flex items-center text-black text-lg gap-x-2'>
                        <PiBooksBold /> <span>Rent Books</span>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton className='flex items-center text-black text-lg gap-x-2'>
                        <MdAudioFile /> <span>Audio Book</span>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton className='flex items-center text-black text-lg gap-x-2'>
                        <TbExchange /> <span>Exchange</span>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton className='flex items-center text-black text-lg gap-x-2'>
                        <MdContactPhone /> <span>Contact</span>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton className='flex items-center text-black text-lg gap-x-2'>
                        <BiSolidContact /> <span>About</span>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton className='flex items-center text-black text-lg gap-x-2'>
                        <CiLogin /> <span>Sing in</span>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton className='flex items-center text-black text-lg gap-x-2'>
                        <SiSimplelogin /> <span>Sing up</span>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><GiHamburgerMenu className='text-2xl text-black' /></Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
