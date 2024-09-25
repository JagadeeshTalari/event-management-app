import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import LinkButton from "../common/buttons/LinkButton";

const Intro = () => {
  return (
    <Box
      sx={{
        display: { md: "flex", xs: "inline" },
        position: "relative",
        alignItems: "center",
        justifyContent: { md: "space-between" },
        // DO NOT ALTER
        px: {
          lg: 13,
          md: 8,
          sm: 6,
          xs: 3,
        },
      }}
      width={"100%"}
      height={400}
    >
      {/* Hero Section Content */}
      <Stack
        // spacing={8}
        alignItems={"center"}
        justifyContent={"center"}
        // height={"100%"}
        zIndex={1000}
        sx={{
          height: { md: "100%", xs: "80%" },
          textAlign: { md: "left", xs: "center" },
          width: {
            lg: "50%",
            md: "46%",
            sm: "80%",
            xs: "90%",
          },
          position: {
            md: "static",
            xs: "absolute",
          },
          top: {
            md: 0,
            xs: "50%",
          },
          left: {
            md: 0,
            xs: "50%",
          },
          transform: {
            md: "none",
            xs: "translate(-50%, -50%)",
          },
          p: {
            md: 0,
            sm: 1,
            xs: 1,
          },
        }}
      >
        <Typography
          variant="subtitle"
          color="black"
          sx={{
            fontSize: {
              lg: 40,
              md: 30,
              sm: 20,
              xs: 18,
            },
            fontWeight: 250,
            lineHeight: 1.2,
            mb: { md: 8, xs: 4 },
          }}
        >
          Where connections <span style={{ fontWeight: "500" }}>spark</span> and
          opportunities <span style={{ fontWeight: "500" }}>meet</span> – host,
          sponsor, and discover networking events{" "}
          <span style={{ fontWeight: "500" }}>effortlessly</span>.
        </Typography>
        <Stack
          direction="row"
          spacing={2.5}
          sx={{
            width: "100%",
            justifyContent: { md: "flex-start", xs: "center" },
          }}
        >
          <LinkButton path={"/host"} buttonText={"host"} />
          <LinkButton path={"/sponsor"} buttonText={"sponsor"} />
        </Stack>
      </Stack>
      {/* Hero Section Image */}
      <Box
        sx={{
          width: {
            lg: "42%",
            md: "48%",
            xs: "100%",
          },
          height: {
            lg: "100%",
            md: "90%",
            xs: "100%",
          },
          // position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            opacity: {
              md: "100%",
              xs: "10%",
            },
          }}
        >
          <Image
            className="intro-img"
            src="https://img.freepik.com/free-vector/creative-team-concept-illustration_114360-6488.jpg?t=st=1727282178~exp=1727285778~hmac=0653ac0d7671bcd9f0ae177090286718ef0615e05b8fcfe6eb677685fc7b0cd9&w=996"
            // height={450}
            alt="people-in-formal-attire-discussing"
            priority={true}
            fill={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
