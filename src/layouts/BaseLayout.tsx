import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import MountainL from "../assets/sb_mountain_l_vb.svg";
import MountainR from "../assets/sb_mountain_r_vb.svg";
import Rocket from "../assets/sb_rocket_vb.svg";

export const BaseLayout = () => {
  return (
    <>
      <CssBaseline />

      <Outlet />

      <Box
        sx={{
          position: "fixed",
          display: "flex",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              paddingBottom: { xs: "15vh", xl: "22vh" },
              marginLeft: { xs: "0", xl: "-2vw" },
              display: "flex",
              alignItems: "end",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              "& svg": {
                width: "50%",
                height: "auto",
                "& *": {
                  stroke: "transparent !important",
                  fill: "#DFDFDF !important",
                },
              },
            }}
          >
            <Rocket />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              display: "flex",
              alignItems: "end",
              height: "100%",
              width: "100%",
              "& svg": {
                width: "100%",
                height: "auto",
                minWidth: "32vw",
                "& *": {
                  stroke: "transparent !important",
                  fill: "#DDDDDD !important",
                },
              },
              paddingRight: "45vw",
            }}
          >
            <MountainL />
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              display: "flex",
              alignItems: "end",
              height: "100%",
              width: "100%",
              justifyContent: "end",
              paddingLeft: "25vw",
              "& svg": {
                width: "100%",
                height: "auto",
                minWidth: "50vw",
                "& *": {
                  stroke: "transparent !important",
                  fill: "#E0E0E0 !important",
                },
              },
            }}
          >
            <MountainR />
          </Box>
        </Container>
      </Box>
    </>
  );
};
