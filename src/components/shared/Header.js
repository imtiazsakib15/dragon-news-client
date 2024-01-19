import FullLogo from "@/assets/The Dragon News.svg";
import { Box } from "@mui/system";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import getCurrentDate from "../utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();

  return (
    <>
      <Box textAlign={"center"} my={5}>
        <Image src={FullLogo} alt="The Dragon News logo" />
        <Typography
          variant="body2"
          color="gray"
          textAlign={"center"}
          py={"10px"}
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign={"center"}>{currentDate}</Typography>
      </Box>
    </>
  );
};

export default Header;
