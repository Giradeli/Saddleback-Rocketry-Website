import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Image } from "./components/Image";
import roundLogo from "./assets/RoundLogoNoText.webp";
import MountainL from "./assets/sb_mountain_l_vb.svg";
import MountainR from "./assets/sb_mountain_r_vb.svg";

type Props = {
  loading: boolean;
};

export const Loader = (props: Props) => {
  const [visible, setVisible] = useState(true);

  const [textEllipsis, setTextEllipsis] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTextEllipsis((prev) => {
        if (textEllipsis.length >= 3) {
          return "";
        } else return prev + ".";
      });
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [textEllipsis.length]);

  useEffect(() => {
    if (props.loading) {
      setVisible(true);
    } else {
      setTimeout(() => {
        setVisible(false);
      }, 150);
    }
  }, [props.loading]);

  if (!visible) return null;

  return (
    <Box
      sx={(theme) => ({
        userSelect: "none",
        pointerEvents: props.loading ? "all" : "none",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: "10vh",
        gap: 12,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000,
        backgroundColor: theme.palette.primary.dark,
        transition: "opacity 0.15s ease-in-out",
        opacity: props.loading ? 1 : 0,
      })}
    >
      <Typography
        variant="h5"
        color="secondary"
        textAlign={"center"}
        minWidth={200}
        sx={{
          zIndex: 10001,
          ":after": {
            position: "absolute",
            content: `'${textEllipsis}'`,
          },
        }}
      >
        Loading
      </Typography>

      <Box
        sx={{
          width: { xs: "75vw", md: "25vw" },
          height: { xs: "75vw", md: "25vw" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10001,
        }}
      >
        <Box
          sx={{
            position: "fixed",
            width: { xs: "75vw", md: "25vw" },
            height: { xs: "75vw", md: "25vw" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={roundLogo}
            style={{ boxShadow: "unset", width: "50%", height: "50%" }}
            disableSkeleton
          />
        </Box>
        <Box
          sx={(theme) => ({
            width: { xs: "75%", md: "90%", lg: "75%" },
            height: { xs: "75%", md: "90%", lg: "75%" },
            "@keyframes rotate": {
              from: {
                transform: "rotate(0deg)",
              },
              to: {
                transform: "rotate(360deg)",
              },
            },
            animation: "rotate 2.5s linear infinite",
            "& svg": {
              fill: theme.palette.secondary.main,
            },
          })}
        >
          <RocketLaunchIcon
            sx={{
              width: { xs: "48px", md: "64px" },
              height: { xs: "48px", md: "64px" },
            }}
          />
        </Box>
      </Box>
      <Typography
        variant="h1"
        color="secondary"
        textAlign={"center"}
        minWidth={200}
        sx={{
          zIndex: 10001,
          marginTop: 4,
        }}
      >
        Saddleback Rocketry
      </Typography>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative" }}>
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
                  fill: "#62041F !important",
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
                  fill: "#760525 !important",
                },
              },
            }}
          >
            <MountainR />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
