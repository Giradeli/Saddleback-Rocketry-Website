import { Box, SxProps, Theme } from "@mui/material";
import React, { useEffect } from "react";

type Props = {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  name?: string;
};

export const Page = (props: Props) => {
  const location = window.location.pathname;

  const { name, sx, children } = props;

  useEffect(() => {
    if (name) {
      document.title = `Saddleback Rocketry - ${name}`;
    } else {
      document.title = "Saddleback Rocketry";
    }
  }, [location, name]);

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          padding: {
            xs: `${theme.spacing(4)} ${theme.spacing(2)}`,
            md: `${theme.spacing(8)} ${theme.spacing(16)}`,
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
};
