'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { HiMenuAlt2 } from 'react-icons/hi';
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';
import { MdMenuBook, MdOutlineAddCircleOutline, MdOutlineMessage } from 'react-icons/md';
import { PiBooks } from 'react-icons/pi';
import { TbExchange, TbUserShield } from 'react-icons/tb';
import { FiBookOpen } from 'react-icons/fi';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname(); 

  const checkActive = (route) => {
    return pathname === route ? 'bg-[#364957] text-[#FFFFFF]' : 'text-black';
  };

  const handleLinkClick = () => {
    setOpen(false); 
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            href="/dashboard" 
            onClick={handleLinkClick} 
            className={`flex items-center gap-2 p-2 ${checkActive('/dashboard')}`}
          >
            <ListItemIcon>
              <IoHomeOutline />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            href="/dashboard/myBooks" 
            onClick={handleLinkClick} 
            className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/myBooks')}`}
          >
            <ListItemIcon>
              <PiBooks />
            </ListItemIcon>
            <ListItemText primary="My Books" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            href="/dashboard/addBook" 
            onClick={handleLinkClick} 
            className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/addBook')}`}
          >
            <ListItemIcon>
              <MdOutlineAddCircleOutline />
            </ListItemIcon>
            <ListItemText primary="Add Book" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            href="/dashboard/exchange" 
            onClick={handleLinkClick} 
            className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/exchange')}`}
          >
            <ListItemIcon>
              <TbExchange />
            </ListItemIcon>
            <ListItemText primary="Exchange" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            href="/dashboard/ourBooks" 
            onClick={handleLinkClick} 
            className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/ourBooks')}`}
          >
            <ListItemIcon>
              <MdMenuBook />
            </ListItemIcon>
            <ListItemText primary="Our Books" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            href="/dashboard/messages" 
            onClick={handleLinkClick} 
            className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/messages')}`}
          >
            <ListItemIcon>
              <MdOutlineMessage />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            href="/dashboard/users" 
            onClick={handleLinkClick} 
            className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/users')}`}
          >
            <ListItemIcon>
              <TbUserShield />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            href="/dashboard/myshelf" 
            onClick={handleLinkClick} 
            className={`flex items-center gap-2 p-2 ${checkActive('/dashboard/myshelf')}`}
          >
            <ListItemIcon>
              <FiBookOpen />
            </ListItemIcon>
            <ListItemText primary="My Shelf" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button onClick={()=>setOpen(true)}>
        <HiMenuAlt2 className="text-black text-3xl -mb-2" />
      </button>
      <Drawer open={open} onClose={()=>setOpen(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
