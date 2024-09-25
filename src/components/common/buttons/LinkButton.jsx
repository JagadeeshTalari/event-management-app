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
          borderColor: "#000",
          bgcolor: "#000",
          borderRadius: 1.5,
          fontWeight: 500,
          py: 1,
          width: "fit-content",
          fontSize: {
            md: "15px",
          },
          ":hover": {
            bgcolor: "#fff",
            borderColor: "#000",
            color: "#000",
          },
        }}
      >
        {buttonText}
      </Button>
    </Link>
  );
};

export default LinkButton;
