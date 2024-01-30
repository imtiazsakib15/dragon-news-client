import getCategoryWiseNews from "@/utils/getCategoryWiseNews";
import {
  CardActionArea,
  Typography,
  CardContent,
  Card,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
            <Link
              href={`/${singleNews.category.toLowerCase()}/${singleNews._id}`}
              style={{ textDecoration: "none" }}
            >
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
                      {singleNews.title.length > 30
                        ? singleNews.title.slice(0, 30) + "..."
                        : singleNews.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {singleNews.details.length > 30
                        ? singleNews.details.slice(0, 300) + "..."
                        : singleNews.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;
