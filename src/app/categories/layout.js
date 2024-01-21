import CategoryList from "@/components/ui/CategoryList";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";

const CategoriesLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <div>
              <CategoryList />
            </div>
          </Grid>
          <Grid xs={9}>{children}</Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CategoriesLayout;
