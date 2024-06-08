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
        color: "floralwhite",
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
          md: "1.5em",
        },
        fontWeight: "bold",
        lineHeight: "2em",
      }}
    >
      At ICO Build Hub, I provide professional ICO development services to help
      you launch your blockchain project successfully. Explore my range of
      services designed to meet your specific needs.
    </Typography>
    <Typography
      sx={{
        color: "floralwhite",
        fontSize: {
          xs: "1.5em",
          md: "3em",
        },
        fontWeight: "bold",
        margin: "1em 0 0 0",
        width: "100%",
        textAlign: "center",
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
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: {
            xs: "center",
            lg: "left",
          },
        }}
      >
        <Typography
          sx={{
            width: {
              xs: "100",
              md: "50%",
            },
            marginBottom: "0.5em",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          Smart Contract Development
        </Typography>
        <Typography
          sx={{
            width: {
              xs: "100",
              md: "50%",
            },
            marginBottom: "0.5em",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          ICO Integration
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: {
            xs: "center",
            lg: "right",
          },
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: "1.2em",
            width: {
              xs: "100",
              md: "50%",
            },
            marginBottom: "0.5em",
            fontWeight: "bold",
          }}
        >
          Frontend Integration
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2em",
            width: {
              xs: "100",
              md: "50%",
            },
            marginBottom: "0.5em",
            fontWeight: "bold",
          }}
        >
          Post-Launch Support
        </Typography>
      </Box>
    </Box>
    <Button
      // onClick={handleScroll}
      variant="contained"
      size="large"
      sx={{
        borderRadius: 10,
        backgroundColor: "#8263ff",
        color: "white",
        "&:hover": {
          fontWeight: "bold",
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
          md: "1.5em",
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
