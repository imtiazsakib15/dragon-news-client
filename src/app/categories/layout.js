import CategoryList from "@/components/ui/CategoryList";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Container from "@mui/material/Container";

const CategoriesLayout = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl">
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
      </Container>
    </>
  );
};

export default CategoriesLayout;
