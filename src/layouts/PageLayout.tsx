import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Footer } from "../components/nav/Footer";
import { Header } from "../components/nav/Header";

export const PageLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box className="header">
        <Header />
      </Box>
      <Box sx={{ flexGrow: 1 }} className="context">
        <Outlet />
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
};
