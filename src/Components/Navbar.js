import React, { useState } from "react";
import { BsCart2, BsSearch, BsHeart } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import logo3 from "../Assets/logo3.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon style={{ color: 'darkgreen' }} />,
    },
    {
      text: "About",
      icon: <InfoIcon style={{ color: 'darkgreen' }} />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon style={{ color: 'darkgreen' }} />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon style={{ color: 'darkgreen' }} />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon style={{ color: 'darkgreen' }} />,
    },
  ];
  return (
    <nav style={navStyles}>
      <div style={navLogoContainerStyles}>
        <img src={logo3} alt="" />
      </div>
      <div style={navbarLinksContainerStyles}>
        <a href="" style={linkStyles}>Home</a>
        <a href="" style={linkStyles}>About</a>
        <a href="" style={linkStyles}>Testimonials</a>
        <a href="" style={linkStyles}>Contact</a>
        <div style={navbarIconsContainerStyles}>
          <a href="" style={iconLinkStyles}>
            <BsSearch style={{ ...navbarIconStyles, color: 'darkgreen' }} />
          </a>
          <a href="" style={iconLinkStyles}>
            <FaUser style={{ ...navbarIconStyles, color: 'darkgreen' }} />
          </a>
          <a href="" style={iconLinkStyles}>
            <BsHeart style={{ ...navbarIconStyles, color: 'darkgreen' }} />
          </a>
          <a href="" style={iconLinkStyles}>
            <BsCart2 style={{ ...navbarIconStyles, color: 'darkgreen' }} />
          </a>
        </div>
        <button style={{ ...primaryButtonStyles, backgroundColor: 'darkgreen' }}>Connect with us</button>
      </div>
      <div style={navbarMenuContainerStyles}>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} style={{ color: 'darkgreen' }} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

const navStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1rem",
  height: "60px",
  borderBottom: "1px solid #ddd",
};

const navLogoContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const navbarLinksContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexGrow: 1,
};

const linkStyles = {
  margin: "0 1rem",
  textDecoration: "none",
  color: "black",
};

const navbarIconsContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const iconLinkStyles = {
  marginLeft: "1rem",
};

const navbarIconStyles = {
  fontSize: "1.5rem",
};

const primaryButtonStyles = {
  marginLeft: "1rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const navbarMenuContainerStyles = {
  display: "none", // Assuming you only show this on mobile
};

export default Navbar;
