import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const LinkButton = ({ path, buttonText }) => {
  return (
    <Link href={path}>
      <Button
        variant="outlined"
        sx={{
          color: "#fff",
          borderColor: "#0e0d06",
          bgcolor: "#0e0d06",
          borderRadius: 1.5,
          fontWeight: 500,
          py: 1,
          width: "fit-content",
          fontSize: {
            md: "15px",
          },
          ":hover": {
            bgcolor: "#fff",
            borderColor: "#0e0d06",
            color: "#0e0d06",
          },
        }}
      >
        {buttonText}
      </Button>
    </Link>
  );
};

export default LinkButton;
