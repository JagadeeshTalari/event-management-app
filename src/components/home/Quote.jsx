import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Quote = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: {
          xs: "450px",
          sm: "600px",
          md: "650px",
          lg: "800px",
        },
        textAlign: "center",
        background:
          "url('https://plus.unsplash.com/premium_photo-1681412504505-c3161f898893?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          height: "100%",
          opacity: "0.8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: {
            xs: 2.5,
            lg: 8,
          },
          px: "15%",
        }}
      >
        <Typography
          color="#151d23"
          sx={{
            textAlign: "left",
            fontSize: {
              xs: "24px",
              sm: "32px",
              md: "40px",
              lg: "52px",
            },
            lineHeight: {
              xs: "28px",
              sm: "36px",
              md: "44px",
              lg: "62px",
            },
            fontWeight: {
              xs: "500",
            },
          }}
        >
          &quot;Everyday by 12pm I have 30+ unsolicited emails in my inbox. The
          only way I take meetings with new vendors is if they take the time to
          meet me face to face.&quot;
        </Typography>
        <Typography
          color="black"
          sx={{
            textAlign: "left",
            color: "#5b6067",
            fontSize: {
              xs: "16px",
              sm: "20px",
              md: "24px",
              lg: "32px",
            },
          }}
        >
          — RAYMOND THOL, CTO, FORTUNE 500 COMPANY
        </Typography>
      </Box>
    </Box>
  );
};

export default Quote;
