import Intro from "@/components/home/Intro";
import { Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* overall container for the page */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          bgcolor: "#F6F6F6",
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
        >
          <Intro />
        </Stack>
      </Container>
    </>
  );
}
