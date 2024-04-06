import React from "react";
import ImageCollage from "./ImageCollage";
import { Container, Typography, Paper, BottomNavigation } from "@mui/material";
import CustomizedAccordions from "./Accordian";
import { Box } from "@mui/material";
import BasicModal from "./Model";
const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography varient="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format"
          alt=""
          height={325}
        />{" "}
        <ImageCollage />
      </Box>
      <Box>
        <Typography varient="h6" component="h4" marginTop={4}>
          About This ticket
        </Typography>
        <Typography varient="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae
          enim qui, ipsum consequatur minima. Quibusdam et dolores non dolorum,
          accusantium id rerum ducimus ab, necessitatibus animi, placeat qui
          odit.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography varient="h6" component="h4" marginTop={4}>
          Frequently Asked Questions
        </Typography>
        <Typography
          varient="paragraph"
          component="p"
          marginTop={3}
          marginBottom={3}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae
          enim qui, ipsum consequatur minima. Quibusdam et dolores non dolorum,
          accusantium id rerum ducimus ab, necessitatibus animi, placeat qui
          odit.
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
         <BasicModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
