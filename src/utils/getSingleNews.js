const singleNews = async (id) => {
  const res = await fetch(
    `https://the-news-portal-server.vercel.app/news/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

export default singleNews;
