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
import img2 from "../../assets/images/About/bookdark.png";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import useUsers from "@/hooks/useUsers";
import { MdOutlineSpaceDashboard } from "react-icons/md";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const session = useSession();
  const { data: users, isLoading, isError, error } = useUsers();
  const loggedInEmail = session?.data?.user?.email;
  const loggedInUser = users?.find((user) => user.email === loggedInEmail);

  const isActive = (route) => pathname === route;

  const DrawerList = (
    <Box
      className="dark:bg-[#272727] h-full bg-white"
      sx={{
        width: 250,
        padding: "20px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        overflowY: "auto",
      }}
      role="presentation"
    >
      <div className="flex justify-between items-center mb-4">
        <Link href={"/"} className="w-full mx-auto -ml-4">
          <Image
            src={img}
            unoptimized
            className="dark:hidden h-[60px] max-w-[150px]"
            height={20}
            width={200}
            alt="image"
          />
          <Image
            src={img2}
            unoptimized
            className="hidden dark:block h-[60px] max-w-[150px]"
            height={20}
            width={200}
            alt="image"
          />
        </Link>
        <motion.button
          onClick={() => setOpen(false)}
          className="text-black"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
        >
          <AiOutlineClose className="text-2xl dark:text-white" />
        </motion.button>
      </div>

      <List>
        {/* Home */}
        {/* {loggedInUser?.role === "admin" && ( */}

        {loggedInUser?.role === "admin" && (
          <ListItem disablePadding>
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <ListItemButton
                component={Link}
                href="dashboard/dashboardd"
                onClick={() => setOpen(false)}
                className="flex items-center p-2 transition duration-300 ease-in-out rounded-md"
              >
                <ListItemIcon>
                  <MdOutlineSpaceDashboard
                    className={`text-xl ${
                      isActive("/dashboard/dashboardd")
                        ? "font-bold text-black dark:text-white"
                        : "text-black dark:text-white"
                    }`}
                  />
                </ListItemIcon>
                <div
                  className={`flex-grow ${
                    isActive("/dashboard/dashboardd")
                      ? "font-bold text-black dark:text-white"
                      : "text-black dark:text-white"
                  }`}
                >
                  <ListItemText primary="Dashboard" />
                  {isActive("/dashboard/dashboardd") && (
                    <div className="border-b-2 border-slate-700 dark:border-white" />
                  )}
                </div>
              </ListItemButton>
            </motion.div>
          </ListItem>
        )}

        {/*  */}

        <ListItem disablePadding>
          <motion.div initial="rest" whileHover="hover" animate="rest">
            <ListItemButton
              component={Link}
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center p-2 transition duration-300 ease-in-out rounded-md"
            >
              <ListItemIcon>
                <IoHomeOutline
                  className={`text-xl ${
                    isActive("/dashboard")
                      ? "font-bold text-black dark:text-white"
                      : "text-black dark:text-white"
                  }`}
                />
              </ListItemIcon>
              <div
                className={`flex-grow ${
                  isActive("/dashboard")
                    ? "font-bold text-black dark:text-white"
                    : "text-black dark:text-white"
                }`}
              >
                <ListItemText primary="Home" />
                {isActive("/dashboard") && (
                  <div className="border-b-2 border-slate-700 dark:border-white" />
                )}
              </div>
            </ListItemButton>
          </motion.div>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        {/* My Books */}
        <ListItem disablePadding>
          <motion.div initial="rest" whileHover="hover" animate="rest">
            <ListItemButton
              component={Link}
              href="/dashboard/myBooks"
              onClick={() => setOpen(false)}
              className="flex items-center p-2 transition duration-300 ease-in-out rounded-md"
            >
              <ListItemIcon>
                <PiBooks
                  className={`text-xl ${
                    isActive("/dashboard/myBooks")
                      ? "font-bold text-black dark:text-white"
                      : "text-black dark:text-white"
                  }`}
                />
              </ListItemIcon>
              <div
                className={`flex-grow ${
                  isActive("/dashboard/myBooks")
                    ? "font-bold text-black dark:text-white"
                    : "text-black dark:text-white"
                }`}
              >
                <ListItemText primary="My Books" />
                {isActive("/dashboard/myBooks") && (
                  <div className="border-b-2 dark:border-white border-black" />
                )}
              </div>
            </ListItemButton>
          </motion.div>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        {/* Add Book */}
        <ListItem disablePadding>
          <motion.div initial="rest" whileHover="hover" animate="rest">
            <ListItemButton
              component={Link}
              href="/dashboard/addBook"
              onClick={() => setOpen(false)}
              className="flex items-center p-2 transition duration-300 ease-in-out rounded-md"
            >
              <ListItemIcon>
                <MdOutlineAddCircleOutline
                  className={`text-xl ${
                    isActive("/dashboard/addBook")
                      ? "font-bold dark:text-white text-black"
                      : "text-black dark:text-white"
                  }`}
                />
              </ListItemIcon>
              <div
                className={`flex-grow ${
                  isActive("/dashboard/addBook")
                    ? "font-bold text-black dark:text-white"
                    : "text-black dark:text-white"
                }`}
              >
                <ListItemText primary="Add Book" />
                {isActive("/dashboard/addBook") && (
                  <div className="border-b-2 border-black dark:border-white dark:text-white" />
                )}
              </div>
            </ListItemButton>
          </motion.div>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        <Divider sx={{ my: 1 }} />

        {/* Messages */}
        <ListItem disablePadding>
          <motion.div initial="rest" whileHover="hover" animate="rest">
            <ListItemButton
              component={Link}
              href="/dashboard/exchange-request"
              onClick={() => setOpen(false)}
              className="flex items-center p-2 transition duration-300 ease-in-out rounded-md"
            >
              <ListItemIcon>
                <TbExchange className={`text-xl ${isActive("/dashboard/exchange-request") ? "font-bold text-black dark:text-white" : "text-black dark:text-white"}`} />
              </ListItemIcon>
              <div className={`flex-grow ${isActive("/dashboard/exchange-request") ? "font-bold text-black dark:text-white" : "text-black dark:text-white"}`}>
                <ListItemText primary="request" />
                {isActive("/dashboard/exchange-request") && <div className="border-b-2 border-black dark:border-white" />}
              </div>
            </ListItemButton>
          </motion.div>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        {/* Users */}

        {loggedInUser?.role === "admin" && (
          <ListItem disablePadding>
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <ListItemButton
                component={Link}
                href="/dashboard/users"
                onClick={() => setOpen(false)}
                className="flex items-center p-2 transition duration-300 ease-in-out rounded-md"
              >
                <ListItemIcon>
                  <TbUserShield
                    className={`text-xl ${
                      isActive("/dashboard/users")
                        ? "font-bold text-black dark:text-white"
                        : "text-black dark:text-white"
                    }`}
                  />
                </ListItemIcon>
                <div
                  className={`flex-grow ${
                    isActive("/dashboard/users")
                      ? "font-bold text-black dark:text-white"
                      : "text-black dark:text-white"
                  }`}
                >
                  <ListItemText primary="Users" />
                  {isActive("/dashboard/users") && (
                    <div className="border-b-2 border-black dark:border-white" />
                  )}
                </div>
              </ListItemButton>
            </motion.div>
          </ListItem>
        )}

        <Divider sx={{ my: 1 }} />

        {/* Profile */}
        <ListItem disablePadding>
          <motion.div initial="rest" whileHover="hover" animate="rest">
            <ListItemButton
              component={Link}
              href="/dashboard/profile"
              onClick={() => setOpen(false)}
              className="flex items-center p-2 transition duration-300 ease-in-out rounded-md"
            >
              <ListItemIcon>
                <FaUserCircle
                  className={`text-xl ${
                    isActive("/dashboard/profile")
                      ? "font-bold text-black dark:text-white"
                      : "text-black dark:text-white"
                  }`}
                />
              </ListItemIcon>
              <div
                className={`flex-grow ${
                  isActive("/dashboard/profile")
                    ? "font-bold text-black dark:text-white"
                    : "text-black dark:text-white"
                }`}
              >
                <ListItemText primary="Profile" />
                {isActive("/dashboard/profile") && (
                  <div className="border-b-2 border-black dark:border-white" />
                )}
              </div>
            </ListItemButton>
          </motion.div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button className="dark:text-white" onClick={() => setOpen(true)}>
        <HiMenuAlt2 className="text-[#364957] dark:text-white text-3xl -mb-2 ml-2" />
      </button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
