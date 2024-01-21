import getAllCategories from "@/utils/getAllCategories";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Link from "next/link";

async function CategoryList() {
  const { data: allCategories } = await getAllCategories();

  return (
    <>
      <Box style={{ paddingBottom: "20px" }}>
        <Typography variant="h4" style={{ padding: "12px 8px" }}>
          Categories
        </Typography>
        {allCategories.map((category) => (
          <div style={{ padding: "10px 5px" }} key={category.id}>
            <Link href={`/categories/${category.title}`}>{category.title}</Link>
          </div>
        ))}
      </Box>
    </>
  );
}

export default CategoryList;
