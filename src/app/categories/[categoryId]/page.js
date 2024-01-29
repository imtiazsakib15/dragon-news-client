import getCategoryWiseNews from "@/utils/getCategoryWiseNews";
import {
  CardActionArea,
  Typography,
  CardContent,
  Card,
  Grid,
} from "@mui/material";
import Image from "next/image";

const Categories = async ({ searchParams }) => {
  const { category } = searchParams;
  const { data: news } = await getCategoryWiseNews(category);
  console.log(news);
  return (
    <div>
      <h1 style={{ padding: "24px 0" }}>{category}</h1>

      <Grid
        sx={{ my: 5 }}
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {news?.map((singleNews) => (
          <Grid key={singleNews.id} item xs={6}>
            <Card>
              <CardActionArea
                sx={{
                  "& img": {
                    width: "100%",
                    height: "250px",
                  },
                }}
              >
                <Image
                  width="100"
                  height="50"
                  src={singleNews.image_url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{
                      p: 0.5,
                      bgcolor: "red",
                      color: "white",
                      fontSize: "12px",
                    }}
                    gutterBottom
                    variant="h5"
                    component="span"
                  >
                    {singleNews.category}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;
