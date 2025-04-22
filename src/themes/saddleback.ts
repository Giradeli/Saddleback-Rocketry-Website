import { createTheme } from "@mui/material";

// https://coolors.co/ffffff-fff6e8-f5e6ae-6f1324-4b0a15-270006-0c0c0c-fdbe55-b40838-c9ecff
const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#B40838",
    },
    secondary: {
      main: "#FDBE55",
    },
    background: {
      default: "#E8E8E8",
      paper: "#F2F2F2",
    },
    common: {
      black: "#0C0C0C",
      white: "#F4F4F4",
    },
    text: {
      primary: "#170107",
    },
  },
});

export const saddlebackTheme = createTheme({
  ...baseTheme,
  ...{
    typography: {
      h1: {
        fontWeight: 500,
        fontSize: "5rem",
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "3rem",
        },
      },
      h2: {
        fontSize: "3.75rem",
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "2.5rem",
        },
      },
      h3: {
        fontSize: "3rem",
        fontWeight: 300,
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "2rem",
        },
      },
      h4: {
        fontSize: "2.5rem",
        fontWeight: 300,
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "1.8rem",
        },
      },
      h5: {
        fontSize: "2.2rem",
        fontWeight: 300,
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "1.5rem",
        },
      },
      subtitle1: {
        fontSize: "1.5rem",
        fontWeight: 400,
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "1.3rem",
        },
      },
      body2: {
        fontSize: "1.25rem",
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "1rem",
        },
      },
      caption: {
        fontSize: "1.2rem",
        fontStyle: "italic",
        color: baseTheme.palette.grey[700],
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "0.9rem",
        },
      },
    },
  },
});
