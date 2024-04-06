import React, { useState,useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography, Skeleton } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

// Data for multiple tour cards
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [{
        props: { variant: "body1" },
        style: { fontSize: '12px' },
      }],
    },
    typography: {
        fontFamily: [
          'Roboto', // Ensure this matches the font name imported from Google Fonts
          'sans-serif',
        ].join(','),
      },
  },
});

const tours = [
    
  {
    id: 1,
    title: "Immers into the Falls",
    imageUrl: "https://source.unsplash.com/featured/?waterfall",
    duration: "5 hours",
    rating: 4.5,
    numReviews: 655,
    price: "C $385",
  },
  {
    id: 2,
    title: "Jungle Adventure",
    imageUrl: "https://source.unsplash.com/featured/?jungle",
    duration: "7 hours",
    rating: 4.2,
    numReviews: 420,
    price: "C $450",
  },
  {
    id: 3,
    title: "Mountain Trek",
    imageUrl: "https://source.unsplash.com/featured/?mountain",
    duration: "10 hours",
    rating: 4.8,
    numReviews: 890,
    price: "C $600",
  },
  {
    id: 4,
    title: "City Exploration",
    imageUrl: "https://source.unsplash.com/featured/?city",
    duration: "3 hours",
    rating: 4.0,
    numReviews: 300,
    price: "C $250",
  },
  {
    id: 5,
    title: "Beach Retreat",
    imageUrl: "https://source.unsplash.com/featured/?beach",
    duration: "2 days",
    rating: 4.9,
    numReviews: 1200,
    price: "C $800",
  },
  {
    id: 6,
    title: "Desert Safari",
    imageUrl: "https://source.unsplash.com/featured/?desert",
    duration: "6 hours",
    rating: 4.7,
    numReviews: 800,
    price: "C $550",
  },
  {
    id: 7,
    title: "Historical Tour",
    imageUrl: "https://source.unsplash.com/featured/?historical",
    duration: "4 hours",
    rating: 4.4,
    numReviews: 600,
    price: "C $300",
  },
  {
    id: 8,
    title: "Countryside Biking",
    imageUrl: "https://source.unsplash.com/featured/?countryside",
    duration: "8 hours",
    rating: 4.6,
    numReviews: 720,
    price: "C $500",
  },
  {
    id: 9,
    title: "Wine Tasting",
    imageUrl: "https://source.unsplash.com/featured/?wine",
    duration: "3 hours",
    rating: 4.3,
    numReviews: 500,
    price: "C $350",
  },
  {
    id: 10,
    title: "Wildlife Safari",
    imageUrl: "https://source.unsplash.com/featured/?wildlife",
    duration: "2 days",
    rating: 4.9,
    numReviews: 1100,
    price: "C $750",
  },
  {
    id: 11,
    title: "Winter is Best",
    imageUrl: "https://source.unsplash.com/featured/?winter",
    duration: "12 days",
    rating: 1,
    numReviews: 1100,
    price: "C $750",
  },
  {
    id: 12,
    title: "Summer is Best",
    imageUrl: "https://source.unsplash.com/featured/?summer",
    duration: "42 days",
    rating: 3,
    numReviews: 1100,
    price: "C $750",
  },
];

const TourCard = ({ tour }) => {
    useEffect(() => {
        // Add event listeners to disable developer tools shortcuts
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("contextmenu", handleContextMenu);
    
        // Cleanup function to remove event listeners when component unmounts
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("contextmenu", handleContextMenu);
        };
      }, []);
    
      const handleKeyDown = (e) => {
        // Check if Ctrl+Shift+I or F12 is pressed
        if ((e.ctrlKey && e.shiftKey && e.key === "I") || e.key === "F12") {
          e.preventDefault(); // Prevent default behavior (opening developer tools)
        //   alert("Developer tools are disabled.");
        }
        // Check if Ctrl+U is pressed
        if (e.ctrlKey && e.key === "u") {
          e.preventDefault(); // Prevent default behavior (viewing page source)
        //   alert("Viewing page source is disabled.");
        }
      };
    
      const handleContextMenu = (e) => {
        e.preventDefault(); // Prevent right-click context menu
      };
    
    const [contentLoaded, setContentLoaded] = useState(false);
  
    const imgStyle = {
      height: "15rem",
      width: "100%",
      objectFit: "cover",
      borderRadius: "8px 8px 0 0",
      display: contentLoaded ? "block" : "none",
    };
  
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ThemeProvider theme={theme}>
          <Paper elevation={15} sx={{ borderRadius: "8px", overflow: "hidden" }}>
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="100%"
              height="15rem"
              style={{ borderRadius: "8px 8px 0 0", display: contentLoaded ? "none" : "block" }}
            />
            <img
              src={tour.imageUrl}
              style={imgStyle}
              alt=""
              onLoad={() => setContentLoaded(true)}
            />
            <Box p={2} display={contentLoaded ? "block" : "none"}>
              {contentLoaded ? (
                <>
                  <Typography variant="h6" gutterBottom>
                    {tour.title}
                  </Typography>
                  <Box display="flex" alignItems="center" mt={1}>
                    <AccessTime sx={{ fontSize: "small", marginRight: 1 }} />
                    <Typography variant="body2">{tour.duration}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <Rating
                      name={`rating-${tour.id}`}
                      value={tour.rating}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    <Typography variant="body2" ml={1}>
                      {tour.rating} ({tour.numReviews} reviews)
                    </Typography>
                  </Box>
                  <Typography variant="body1" mt={2}>
                    FROM {tour.price}
                  </Typography>
                </>
              ) : (
                <>
                  <Skeleton variant="circular" animation="wave" height={20} width="80%" />
                  <Box display="flex" alignItems="center" mt={1}>
                    <Skeleton animation="wave" height={14} width="40%" />
                  </Box>
                  <Box  display="flex" alignItems="center" mt={1}>
                    <Skeleton variant="circular" animation="wave" height={16} width="30%" />
                    <Skeleton variant="circular" animation="wave" height={16} width="40%" />
                  </Box>
                  <Skeleton variant="circular" animation="wave" height={20} width="60%" />
                </>
              )}
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    );
  };



const ToursGrid = () => {
  return (
    <Grid container spacing={3}>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </Grid>
  );
};

export default ToursGrid;
