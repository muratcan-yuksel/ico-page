import { Box, Button, Typography } from "@mui/material";

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
  // {
  //   title: "Tier 3: Complete ICO Solution with Frontend Integration",
  //   features: [
  //     "Includes everything in Tier 2",
  //     "Development of a responsive frontend for the ICO",
  //     "Integration of frontend with ICO smart contract",
  //     "Features include investor dashboard and transaction history",
  //     "Customization to match your branding",
  //     "Deployment of frontend on a web server",
  //     "Detailed documentation",
  //     "5 revisions included",
  //     "Post-delivery support for 21 days",
  //   ],
  // },
];

const Services = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
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
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: {
          xs: "20px",
          lg: "70px",
        },
      }}
    >
      {serviceTiers.map((tier, index) => (
        <Box
          key={index}
          sx={{
            bgcolor: "#3a2c56",
            borderRadius: "20px",
            border: "1px solid whitesmoke",
            height: "auto",
            minHeight: {
              xs: "auto",
              md: "500px",
            },

            marginBottom: "20px",
            width: {
              xs: "70%",
              lg: "500px",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "3em",
          }}
        >
          <Typography
            sx={{
              color: "whitesmoke",
              fontSize: {
                xs: "1.5em",
                md: "1.7em",
              },
              fontWeight: "bold",
              marginBottom: "1em",
            }}
          >
            {tier.title}
          </Typography>
          <Box
            sx={{
              fontSize: {
                xs: "1em",
                md: "1.3em",
              },
              lineHeight: "2em",
            }}
          >
            {" "}
            {tier.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "1em",
            }}
          >
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
                margin: "0 20px",
                fontSize: "1.2em",
              }}
            >
              Get Started{" "}
            </Button>{" "}
          </Box>
        </Box>
      ))}
    </Box>
    <Box
      sx={{
        bgcolor: "#3a2c56",
        borderRadius: "20px",
        border: "1px solid whitesmoke",
        height: "auto",
        minHeight: "600px",
        marginBottom: "20px",
        width: {
          xs: "70%",
          lg: "500px",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "3em",
      }}
    >
      {" "}
      <Typography
        sx={{
          color: "whitesmoke",
          fontSize: {
            xs: "1.5em",
            md: "1.7em",
          },
          fontWeight: "bold",
          marginBottom: "1em",
        }}
      >
        Tier 3: Complete ICO Solution with Frontend Integration
      </Typography>
      <Box
        sx={{
          fontSize: {
            xs: "1em",
            md: "1.3em",
          },
          lineHeight: "2em",
        }}
      >
        <li>Includes everything in Tier 2</li>
        <li>Development of a responsive frontend for the ICO</li>
        <li>Integration of frontend with ICO smart contract</li>
        <li>Features include investor dashboard and transaction history</li>
        <li>Customization to match your branding</li>
        <li>Deployment of frontend on a web server</li>
        <li>Detailed documentation</li>
        <li>5 revisions included</li>
        <li>Post-delivery support for 21 days</li>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "1em",
        }}
      >
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
            margin: "0 20px",
            fontSize: "1.2em",
          }}
        >
          Get Started{" "}
        </Button>{" "}
      </Box>
    </Box>
  </Box>
);

export default Services;
