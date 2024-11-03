import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaChalkboardTeacher, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

export default function AccountMenu({ session }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log("session", session);
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title={session?.data?.user?.name || 'Profile'}>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {session?.data?.user.image ? (
              <Image
                src={session?.data?.user?.image}
                width={32}
                height={32}
                className="rounded-full"
                alt="profile-image"
              />
            ) : (
              <CgProfile className="text-black font-black text-3xl" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml:0,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 8,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>{session?.data?.user?.name}</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FaChalkboardTeacher className="mr-0.5" />
          </ListItemIcon>
          <Link href="/dashboard">Dashboard</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FaSignOutAlt className="mr-0.5" />
          </ListItemIcon>
          <button
            onClick={() => {
              signOut();
              toast.success("Signed out successfully!");
            }}
          >
            Sign out
          </button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
