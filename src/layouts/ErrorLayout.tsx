import { Box } from "@mui/material";
import { Outlet } from "react-router";

export const ErrorLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};
