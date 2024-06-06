import { Box, Typography } from "@mui/material";

const serviceTiers = [
  {
    title: "Tier 1: Basic ICO Smart Contract Development",
    features: [
      "Development of a secure ERC-20 (or similar) token smart contract",
      "Comprehensive testing and debugging",
      "Deployment on the Ethereum (or preferred) blockchain",
      "Basic documentation and user guide",
      "2 revisions included",
      "Post-delivery support for 7 days",
    ],
  },
  {
    title: "Tier 2: Token Sale Integration",
    features: [
      "Includes everything in Tier 1",
      "Development of a token sale (ICO) smart contract",
      "Integration with the token smart contract",
      "Configuration of ICO phases and parameters",
      "Comprehensive testing and debugging",
      "Detailed documentation",
      "3 revisions included",
      "Post-delivery support for 14 days",
    ],
  },
  {
    title: "Tier 3: Complete ICO Solution with Frontend Integration",
    features: [
      "Includes everything in Tier 2",
      "Development of a responsive frontend for the ICO",
      "Integration of frontend with ICO smart contract",
      "Features include investor dashboard and transaction history",
      "Customization to match your branding",
      "Deployment of frontend on a web server",
      "Detailed documentation",
      "5 revisions included",
      "Post-delivery support for 21 days",
    ],
  },
];

const Services = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: {
        xs: "column",
        lg: "row",
      },
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      gap: {
        xs: "20px",
        lg: "70px 0",
      },
      width: "100%",
    }}
  >
    {serviceTiers.map((tier, index) => (
      <Box
        key={index}
        sx={{
          bgcolor: "#FFFAF0",
          borderRadius: "20px",
          border: "1px solid #333333",
          height: "500px",
          marginBottom: "20px",
          width: {
            xs: "80%",
            lg: "500px",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "40px 0 0 40px",
        }}
      >
        <Typography
          sx={{
            color: "#333333",
            fontSize: "1.7em",
            fontWeight: "bold",
          }}
        >
          {tier.title}
        </Typography>
        <ul style={{ fontSize: "1.3em", lineHeight: "2em" }}>
          {tier.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </Box>
    ))}
  </Box>
);

export default Services;
