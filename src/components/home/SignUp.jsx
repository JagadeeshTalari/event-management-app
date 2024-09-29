import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const SignUp = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#0e0d06",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        py: 14,
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "32px",
            sm: "44px",
            md: "58px",
            lg: "60px",
          },
        }}
        color="white"
      >
        Ready to get started?
      </Typography>
      <Link href={"/signup"}>
        <Button
          variant="outlined"
          sx={{
            color: "#F7FF62",
            borderColor: "#F7FF62",
            borderRadius: 0,
            py: 1.3,
            width: "fit-content",
            ":hover": {
              bgcolor: "#F7FF62",
              borderColor: "#F7FF62",
              color: "#151d23",
            },
          }}
        >
          Signup
        </Button>
      </Link>
    </Box>
  );
};

export default SignUp;
