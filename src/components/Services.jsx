import { Box, Typography } from "@mui/material";

const Services = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: {
        xs: "column",
        lg: "row",
      },
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      border: "5px solid red",
      width: "auto",
    }}
  >
    {/* <h2>Our Services</h2>{" "} */}
    <Box
      sx={{
        bgcolor: "#3a2b55",
        padding: "20px",
        borderRadius: "20px",
        height: "500px",
        marginBottom: "20px",
        width: {
          xs: "80%",
          lg: "500px",
        },
      }}
    >
      <Typography
        sx={{
          color: "#9075ff",
          fontSize: "1.5em",
          fontWeight: "bold",
        }}
      >
        Tier 1: Basic ICO Smart Contract Development
      </Typography>
      <ul
        style={{
          fontSize: "1.2em",
        }}
      >
        <li>
          Development of a secure ERC-20 (or similar) token smart contract
        </li>
        <li>Comprehensive testing and debugging</li>
        <li>Deployment on the Ethereum (or preferred) blockchain</li>
        <li>Basic documentation and user guide</li>
        <li>2 revisions included</li>
        <li>Post-delivery support for 7 days</li>
      </ul>
    </Box>
    <Box
      sx={{
        bgcolor: "#3a2b55",
        padding: "20px",
        borderRadius: "20px",
        height: "500px",
        width: {
          xs: "80%",
          lg: "500px",
        },
      }}
    >
      {" "}
      <Typography
        sx={{
          color: "#9075ff",
          fontSize: "1.5em",
          fontWeight: "bold",
        }}
      >
        Tier 2: Token Sale Integration
      </Typography>
      <ul>
        <li>Includes everything in Tier 1</li>
        <li>Development of a token sale (ICO) smart contract</li>
        <li>Integration with the token smart contract</li>
        <li>Configuration of ICO phases and parameters</li>
        <li>Comprehensive testing and debugging</li>
        <li>Detailed documentation</li>
        <li>3 revisions included</li>
        <li>Post-delivery support for 14 days</li>
      </ul>
    </Box>
    <Box
      sx={{
        bgcolor: "#3a2b55",
        padding: "20px",
        borderRadius: "20px",
        height: "500px",
        width: {
          xs: "80%",
          lg: "500px",
        },
      }}
    >
      {" "}
      <Typography
        sx={{
          color: "#9075ff",
          fontSize: "1.5em",
          fontWeight: "bold",
        }}
      >
        Tier 3: Complete ICO Solution with Frontend Integration
      </Typography>
      <ul>
        <li>Includes everything in Tier 2</li>
        <li>Development of a responsive frontend for the ICO</li>
        <li>Integration of frontend with ICO smart contract</li>
        <li>Features include investor dashboard and transaction history</li>
        <li>Customization to match your branding</li>
        <li>Deployment of frontend on a web server</li>
        <li>Detailed documentation</li>
        <li>5 revisions included</li>
        <li>Post-delivery support for 21 days</li>
      </ul>
    </Box>
  </Box>
);

export default Services;
