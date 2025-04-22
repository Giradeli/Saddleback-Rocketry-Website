import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  children?: React.ReactNode;
};

export const Team = (props: Props) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(2),
      })}
    >
      <Typography textAlign={"center"} variant="h2">
        {props.name}
      </Typography>
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "grid",
          gap: theme.spacing(4),
          justifyContent: "center",
          gridTemplateColumns: "repeat(auto-fit, 256px);",
        })}
      >
        {props.children}
      </Box>
    </Box>
  );
};
