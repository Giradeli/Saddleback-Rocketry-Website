import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

export const BaseLayout = () => {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
};
