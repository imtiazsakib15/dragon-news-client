import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const Footer = () => {
  const navLinks = [
    { route: "Home", pathname: "/" },
    { route: "Pages", pathname: "/pages" },
    { route: "Category", pathname: "/category" },
    { route: "News", pathname: "/news" },
  ];

  return (
    <>
      <Box bgcolor="#011321" sx={{ py: { xs: "50px", md: "80px" } }}>
        <Box
          textAlign={"center"}
          sx={{
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

        <Stack
          direction="row"
          alignItems="center"
          sx={{ mx: "auto", width: "max-content", pt: "10px" }}
        >
          {navLinks.map((navLink) => (
            <Link
              key={navLink.pathname}
              href={navLink.pathname}
              style={{ margin: "2px 4px", color: "white", display: "block" }}
            >
              {navLink.route}
            </Link>
          ))}
        </Stack>
        <Typography
          variant="body2"
          color="white"
          textAlign={"center"}
          pt={"10px"}
        >
          @{new Date().getFullYear()} Dragon News. Design by Programming Hero
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
