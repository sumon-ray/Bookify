"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiMenuAlt2 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddCircleOutline, MdOutlineMessage } from "react-icons/md";
import { PiBooks } from "react-icons/pi";
import { TbExchange, TbUserShield } from "react-icons/tb";
import { motion } from "framer-motion";
import img from "../../assets/images/About/logo (1).png";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { AiOutlineClose } from "react-icons/ai"; // Importing a more eye-catching close icon

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const checkActive = (route) => {
    return pathname === route
      ? "bg-[#364957] hover:bg-[#364957] rounded-md border-l-4 border-l-[#FFD700] text-[#FFFFFF] shadow-lg" // Unique style for active route
      : "text-black";
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  const hoverEffect = {
    rest: { scale: 1, opacity: 1, boxShadow: "none" },
    hover: {
      scale: 1.05,
      opacity: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const iconActive = (route) => {
    return pathname === route ? "text-white text-2xl" : "text-black text-xl";
  };

  const DrawerList = (
    <Box sx={{ 
      width: 250, 
      background: '#FFFFFF', 
      borderRadius: '12px', 
      padding: '20px', 
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      overflowY: 'auto', 
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#BDC3C7',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#F0F0F0',
      },
    }} role="presentation">
      <div className="flex justify-between items-center mb-4"> 
        <Link href={"/"} className="w-full mx-auto"> 
          <Image src={img} unoptimized className="h-[60px] max-w-[150px] -mr-6" height={20} width={200} />
        </Link>
        <motion.button 
          onClick={() => setOpen(false)} 
          className="text-black" 
          whileHover={{ scale: 1.2, rotate: 15 }} 
          whileTap={{ scale: 0.9, rotate: -15 }} 
        >
          <AiOutlineClose className="text-2xl" />
        </motion.button>
      </div>

      {/* Section Header */}
      {/* <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Navigation</Typography> */}
      <List>
        {/* Home */}
        <ListItem disablePadding>
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <ListItemButton
              component={Link}
              href="/dashboard"
              onClick={handleLinkClick}
              className={`flex items-center -space-x-6 ${checkActive("/dashboard")} transition duration-300 ease-in-out rounded-md p-2`} // Added padding
            >
              <ListItemIcon className={iconActive("/dashboard")}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <IoHomeOutline />
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ fontWeight: pathname === "/dashboard" ? 'bold' : 'normal' }} />
            </ListItemButton>
          </motion.div>
        </ListItem>

        {/* Divider */}
        <Divider sx={{ my: 1 }} /> 

        {/* My Books */}
        <ListItem disablePadding>
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <ListItemButton
              component={Link}
              href="/dashboard/myBooks"
              onClick={handleLinkClick}
              className={`flex items-center -space-x-6 ${checkActive("/dashboard/myBooks")} transition duration-300 ease-in-out rounded-md p-2`}
            >
              <ListItemIcon className={iconActive("/dashboard/myBooks")}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <PiBooks />
                  {/* Removed Notification badge */}
                  {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span> */}
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="My Books" sx={{ fontWeight: pathname === "/dashboard/myBooks" ? 'bold' : 'normal' }} />
            </ListItemButton>
          </motion.div>
        </ListItem>

        {/* Divider */}
        <Divider sx={{ my: 1 }} />

        {/* Add Book */}
        <ListItem disablePadding>
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <ListItemButton
              component={Link}
              href="/dashboard/addBook"
              onClick={handleLinkClick}
              className={`flex items-center -space-x-6 ${checkActive("/dashboard/addBook")} transition duration-300 ease-in-out rounded-md p-2`}
            >
              <ListItemIcon className={iconActive("/dashboard/addBook")}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <MdOutlineAddCircleOutline />
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Add Book" sx={{ fontWeight: pathname === "/dashboard/addBook" ? 'bold' : 'normal' }} />
            </ListItemButton>
          </motion.div>
        </ListItem>

        {/* Divider */}
        <Divider sx={{ my: 1 }} />

        {/* Exchange */}
        <ListItem disablePadding>
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <ListItemButton
              component={Link}
              href="/dashboard/exchange"
              onClick={handleLinkClick}
              className={`flex items-center -space-x-6 ${checkActive("/dashboard/exchange")} transition duration-300 ease-in-out rounded-md p-2`}
            >
              <ListItemIcon className={iconActive("/dashboard/exchange")}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <TbExchange />
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Exchange" sx={{ fontWeight: pathname === "/dashboard/exchange" ? 'bold' : 'normal' }} />
            </ListItemButton>
          </motion.div>
        </ListItem>

        {/* Divider */}
        <Divider sx={{ my: 1 }} />

        {/* Messages */}
        <ListItem disablePadding>
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <ListItemButton
              component={Link}
              href="/dashboard/messages"
              onClick={handleLinkClick}
              className={`flex items-center -space-x-6 ${checkActive("/dashboard/messages")} transition duration-300 ease-in-out rounded-md p-2`}
            >
              <ListItemIcon className={iconActive("/dashboard/messages")}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <MdOutlineMessage />
                  {/* Removed Notification badge */}
                  {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">5</span> */}
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Messages" sx={{ fontWeight: pathname === "/dashboard/messages" ? 'bold' : 'normal' }} />
            </ListItemButton>
          </motion.div>
        </ListItem>

        {/* Divider */}
        <Divider sx={{ my: 1 }} />

        {/* Users */}
        <ListItem disablePadding>
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={hoverEffect}
          >
            <ListItemButton
              component={Link}
              href="/dashboard/users"
              onClick={handleLinkClick}
              className={`flex items-center -space-x-6 ${checkActive("/dashboard/users")} transition duration-300 ease-in-out rounded-md p-2`}
            >
              <ListItemIcon className={iconActive("/dashboard/users")}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <TbUserShield />
                </motion.div>
              </ListItemIcon>
              <ListItemText primary="Users" sx={{ fontWeight: pathname === "/dashboard/users" ? 'bold' : 'normal' }} />
            </ListItemButton>
          </motion.div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <HiMenuAlt2 className="text-[#364957] text-3xl -mb-2 ml-2" />
      </button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


