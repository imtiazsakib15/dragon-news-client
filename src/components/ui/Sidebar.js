import { CardActionArea, Typography, CardContent, Card } from "@mui/material";
import Image from "next/image";
import latest1 from "@/assets/latest1.png";

const Sidebar = () => {
  return (
    <>
      <Card width={"100%"} sx={{ margin: "20px" }}>
        <CardActionArea>
          {/* <Image style={{ width: "100%" }} src={latest1} alt="green iguana" /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Sidebar;
