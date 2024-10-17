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

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const checkActive = (route) => {
    return pathname === route
      ? "bg-[#364957] hover:bg-[#364957] rounded-r-md border-r-4 border-r-gray-400 text-[#FFFFFF]"
      : "text-black";
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  const hoverEffect = {
    rest: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.05,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const iconActive = (route) => {
    return pathname === route ? "text-white " : "text-black";
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
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
              className={`flex items-center -space-x-6  ${checkActive(
                "/dashboard"
              )}`}
            >
              <ListItemIcon className={iconActive("/dashboard")}>
                <IoHomeOutline />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </motion.div>
        </ListItem>

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
              className={`flex items-center -space-x-6  ${checkActive(
                "/dashboard/myBooks"
              )}`}
            >
              <ListItemIcon className={iconActive("/dashboard/myBooks")}>
                <PiBooks />
              </ListItemIcon>
              <ListItemText primary="My Books" />
            </ListItemButton>
          </motion.div>
        </ListItem>

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
              className={`flex items-center  -space-x-6  ${checkActive(
                "/dashboard/addBook"
              )}`}
            >
              <ListItemIcon className={iconActive("/dashboard/addBook")}>
                <MdOutlineAddCircleOutline />
              </ListItemIcon>
              <ListItemText primary="Add Book" />
            </ListItemButton>
          </motion.div>
        </ListItem>

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
              className={`flex items-center -space-x-6  ${checkActive(
                "/dashboard/exchange"
              )}`}
            >
              <ListItemIcon className={iconActive("/dashboard/exchange")}>
                <TbExchange />
              </ListItemIcon>
              <ListItemText primary="Exchange" />
            </ListItemButton>
          </motion.div>
        </ListItem>

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
              className={`flex items-center  -space-x-6 ${checkActive(
                "/dashboard/messages"
              )}`}
            >
              <ListItemIcon className={iconActive("/dashboard/messages")}>
                <MdOutlineMessage />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </motion.div>
        </ListItem>

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
              className={`flex items-center  -space-x-6  ${checkActive(
                "/dashboard/users"
              )}`}
            >
              <ListItemIcon className={iconActive("/dashboard/users")}>
                <TbUserShield />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </motion.div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <HiMenuAlt2 className="text-black text-3xl -mb-2 ml-2" />
      </button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
