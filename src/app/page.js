import LatestNews from "@/components/ui/LatestNews";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Sidebar from "@/components/ui/Sidebar";

export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <LatestNews />
          </Grid>
          <Grid xs={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
