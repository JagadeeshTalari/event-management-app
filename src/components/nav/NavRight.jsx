import Link from "next/link";
import { Button } from "@mui/material";

const NavRight = () => {
  return (
    <>
      <Link href={"/login"}>
        <Button
          variant="outlined"
          sx={{
            fontSize: {
              md: 14,
              sm: 12,
            }, // rwd not working
            width: "max-content",
            borderRadius: 1.5,
            color: "#0e0d06",
            borderColor: "#0e0d06",
            ":hover": {
              bgcolor: "#0e0d06",
              borderColor: "#0e0d06",
              color: "#fff",
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          LOG IN
        </Button>
      </Link>
      <Link href={"/signup"}>
        <Button
          variant="outlined"
          sx={{
            fontSize: {
              md: 14,
              sm: 12,
            }, // rwd not working
            width: "max-content",
            borderRadius: 1.5,
            bgcolor: "#0e0d06",
            borderColor: "#0e0d06",
            color: "#fff",
            ":hover": {
              color: "#0e0d06",
              borderColor: "#0e0d06",
              bgcolor: "#fff",
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          SIGN UP
        </Button>
      </Link>
    </>
  );
};

export default NavRight;
