import { Box, Typography } from "@mui/material";
import React from "react";

const Contact = () => (
  <Box
    sx={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "floralwhite",
    }}
    id="contact"
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
      }}
    >
      Contact Me
    </Typography>
    <Typography
      sx={{
        color: "#333333",
        fontSize: {
          xs: "1em",
          md: "1.5em",
        },
        fontWeight: "bold",
        margin: "1em 0 0 0",
        marginBottom: "1em",
      }}
    >
      Have a question or ready to start your project? Reach out to me today.
    </Typography>
    <Typography
      sx={{
        color: "#333333",
        fontSize: {
          xs: "1em",
          md: "1.3em",
        },
        fontWeight: "bold",
        margin: "1em 0 0 0",
        marginBottom: "1em",
      }}
    >
      Email: mail@muratcanyuksel.xyz
    </Typography>
    <Typography
      sx={{
        color: "#333333",
        fontSize: {
          xs: "1em",
          md: "1.3em",
        },
        fontWeight: "bold",
        margin: "1em 0 0 0",
        marginBottom: "1em",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      <a
        style={{
          color: "#333333",
          textDecoration: "none",
        }}
        href="https://www.upwork.com/freelancers/~013e02c0111a99e5d5"
        target="_blank"
      >
        Click to find me on Upwork
      </a>{" "}
    </Typography>
    <Typography
      sx={{
        color: "#333333",
        fontSize: {
          xs: "1em",
          md: "1.3em",
        },
        fontWeight: "bold",
        margin: "1em 0 0 0",
        marginBottom: "1em",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      <a
        style={{
          color: "#333333",
          textDecoration: "none",
        }}
        href="https://www.linkedin.com/in/muratcanyuksel/"
        target="_blank"
      >
        Click to find me on LinkedIn
      </a>
    </Typography>
    <Typography
      sx={{
        color: "#333333",
        fontSize: {
          xs: "1em",
          md: "1.5em",
        },
        fontWeight: "bold",
        margin: "1em 0 0 0",
        marginBottom: "1em",
      }}
    >
      I look forward to helping you achieve your blockchain project goals.
    </Typography>
  </Box>
);
export default Contact;
