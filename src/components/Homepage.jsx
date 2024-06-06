import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Homepage = () => (
  <Box
    id="homepage"
    sx={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography
      sx={{
        color: "#333333",
        fontSize: {
          xs: "1.5em",
          md: "3em",
        },
        fontWeight: "bold",
        margin: "1em 0 0 0",
        marginBottom: "1em",
      }}
    >
      Welcome to ICO Build Hub{" "}
    </Typography>
    <Typography
      sx={{
        fontSize: {
          xs: "1em",
          md: "1.3em",
        },
        lineHeight: "2em",
        fontWeight: "bold",
      }}
    >
      At ICO Build Hub, I provide professional ICO development services to help
      you launch your blockchain project successfully. Explore my range of
      services designed to meet your specific needs.
    </Typography>
    <Typography
      sx={{
        color: "#333333",
        fontSize: {
          xs: "1.5em",
          md: "3em",
        },
        fontWeight: "bold",
        margin: "1em 0 0 0",
      }}
    >
      Services Offered
    </Typography>{" "}
    <Box
      sx={{
        fontSize: {
          xs: "1em",
          md: "1.3em",
        },
        lineHeight: "2em",
      }}
    >
      <li style={{ fontWeight: "bold" }}>Smart Contract Development</li>
      <li style={{ fontWeight: "bold" }}>ICO Integration</li>
      <li style={{ fontWeight: "bold" }}>Frontend Integration</li>
      <li style={{ fontWeight: "bold" }}>Post-Launch Support</li>
    </Box>
    <Button
      // onClick={handleScroll}
      variant="contained"
      size="large"
      sx={{
        borderRadius: 10,
        backgroundColor: "#FF4500",
        color: "white",
        "&:hover": {
          fontWeight: "bold",
          backgroundColor: "#FF8C00",
        },
        margin: " 1.5em",
        fontSize: {
          xs: "1.2em",
          sm: "2em",
        },
      }}
    >
      Get Started Today{" "}
    </Button>{" "}
    <Typography
      sx={{
        fontSize: {
          xs: "1em",
          md: "1.3em",
        },
        lineHeight: "2em",
        fontWeight: "bold",
        marginBottom: "1em",
      }}
    >
      Contact me to discuss your project and see how I can assist you in
      bringing your blockchain vision to life.
    </Typography>
  </Box>
);

export default Homepage;
