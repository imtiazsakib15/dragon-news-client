import singleNews from "@/utils/getSingleNews";
import { Container } from "@mui/system";
import Image from "next/image";

const NewsDetails = async ({ params }) => {
  const { newsId } = params;
  const news = await singleNews(newsId);
  console.log(news?.data);
  return (
    <Container>
      <Image
        width="500"
        height="300"
        src={news?.data?.image_url}
        alt="green iguana"
      />
      <div>
        <p style={{ whiteSpace: "pre-line" }}>{news?.data?.details}</p>
      </div>
    </Container>
  );
};

export default NewsDetails;
