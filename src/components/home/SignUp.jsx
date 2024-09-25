import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const SignUp = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#F7FF62",
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
        color="black"
      >
        Ready to get started?
      </Typography>
      <Link href={"/signup"}>
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#000",
            bgcolor: "#000",
            borderRadius: 1.5,
            width: "fit-content",
            py: 1,
            ":hover": {
              bgcolor: "#000",
              borderColor: "#000",
              color: "#fff",
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
