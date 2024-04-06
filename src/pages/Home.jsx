import TourCard from "../component/TourCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchAppBar from "../component/SearchAppBar";

function Home() {
  return (
    <div>
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={3}>
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
