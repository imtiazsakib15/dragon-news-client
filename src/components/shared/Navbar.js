"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import Header from "./Header";

const navLinks = [
  { route: "Home", pathname: "/" },
  { route: "Pages", pathname: "/pages" },
  { route: "Category", pathname: "/category" },
  { route: "News", pathname: "/news" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Header />
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              <Link href={"/"}>
                <Image src={Logo} alt="Logo" />
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navLinks.map((navLink) => (
                  <MenuItem key={navLink.pathname} onClick={handleCloseNavMenu}>
                    <Link href={navLink.pathname}>
                      <Typography textAlign="center">
                        {navLink.route}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              variant="h5"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link href={"/"}>
                <Image src={Logo} alt="Logo" />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navLinks.map((navLink) => (
                <Link
                  onClick={handleCloseNavMenu}
                  key={navLink.pathname}
                  href={navLink.pathname}
                  style={{
                    margin: "2px 4px",
                    color: "white",
                    display: "block",
                  }}
                >
                  {navLink.route}
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexGrow: 0,
                "& svg": {
                  color: "white",
                },
              }}
            >
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <YouTube />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
