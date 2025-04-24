import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Image } from "./components/Image";
import roundLogo from "./assets/RoundLogoNoText.webp";

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
        gap: 8,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: theme.palette.primary.dark,
        transition: "opacity 0.15s ease-in-out",
        opacity: props.loading ? 1 : 0,
      })}
    >
      <Box
        sx={{
          width: { xs: "75vw", md: "25vw" },
          height: { xs: "75vw", md: "25vw" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
        variant="h5"
        color="secondary"
        textAlign={"center"}
        minWidth={200}
        sx={{
          ":after": {
            position: "absolute",
            content: `'${textEllipsis}'`,
          },
        }}
      >
        Loading
      </Typography>
    </Box>
  );
};
