import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  children?: React.ReactNode;
};

export const FooterSection = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{ textAlign: { xs: "center", md: "left" }, userSelect: "none" }}
        variant="h4"
      >
        {props.name}
      </Typography>
      {props.children}
    </Box>
  );
};
