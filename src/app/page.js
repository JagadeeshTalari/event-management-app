import { Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* overall container for the page */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          bgcolor: "#e5e8eb",
          px: 13,
          py: 8,
        }}
      >
        {/* contains sections of the page */}
        <Stack
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            width: "100%",
            height: "100%",
          }}
        ></Stack>
      </Container>
    </>
  );
}
