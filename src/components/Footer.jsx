import { Box, Divider, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        m={0}
        p={5}
        px={6}
        sx={{
          bgcolor: "#0e0d06",
        }}
      >
        <Stack
          direction={{
            sm: "row",
            xs: "column",
          }}
          justifyContent="space-between"
          alignItems={{
            sm: "center",
            xs: "top",
          }}
          mb={{
            sm: 8,
            xs: 2,
          }}
        >
          <Typography
            variant="h1"
            component="div"
            sx={{
              color: "#FFD32B",
              fontWeight: 500,
              fontSize: {
                md: 50,
                sm: 40,
                xs: 30,
              },
            }}
          >
            LOGO
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            mt={{
              sm: 0,
              xs: 3,
            }}
          >
            <Typography
              sx={{
                color: "white",
                maxWidth: {
                  md: "175px",
                  sm: "125px",
                  xs: "80px",
                },
                fontSize: {
                  md: 16,
                  sm: 12,
                  xs: 8,
                },
              }}
            >
              (081) 3527 5000 info@logo.com
            </Typography>
            <Typography
              sx={{
                color: "white",
                maxWidth: {
                  md: "175px",
                  sm: "125px",
                  xs: "80px",
                },
                fontSize: {
                  md: 16,
                  sm: 12,
                  xs: 8,
                },
              }}
            >
              No. 26/1 BRIGADE WORLD BENGALURU, KARNATAKA 560055
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ bgcolor: "white" }}></Divider>
        <Stack
          direction="row"
          justifyContent="space-between"
          mt={{
            md: 3,
            sm: 2,
            xs: 1,
          }}
        >
          <Box
            sx={{
              color: "white",
              fontSize: {
                md: 17,
                sm: 16,
                xs: 9,
              },
            }}
          >
            {" "}
            LOGO 2023
          </Box>
          <Stack direction="row" spacing={{ xs: 2, sm: 3, md: 5 }}>
            <Typography
              variant="body"
              sx={{
                color: "white",
                fontSize: {
                  md: 14,
                  sm: 12,
                },
                display: {
                  sm: "block",
                  xs: "none",
                },
              }}
            >
              ABOUT
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "white",
                fontSize: {
                  md: 14,
                  sm: 12,
                },
                display: {
                  sm: "block",
                  xs: "none",
                },
              }}
            >
              CONTACT
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "white",
                fontSize: {
                  md: 14,
                  sm: 12,
                },
                display: {
                  sm: "block",
                  xs: "none",
                },
              }}
            >
              HOST
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "white",
                fontSize: {
                  md: 14,
                  sm: 12,
                },
                display: {
                  sm: "block",
                  xs: "none",
                },
              }}
            >
              SPONSOR
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
