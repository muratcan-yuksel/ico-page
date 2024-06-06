import React from "react";
import Homepage from "./components/Homepage";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
      }}
    >
      <Homepage />
      <Services />
      <Contact />
    </Box>
  );
};

export default App;
