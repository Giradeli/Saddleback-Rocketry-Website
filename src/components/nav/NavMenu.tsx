import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { NavLink as ActiveNavLink } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import RocketIcon from "@mui/icons-material/Rocket";

export const NavMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const renderDrawerNavLink = (to: string, name: string) => {
    return (
      <ListItem disablePadding>
        <ListItemButton
          onClick={(e) => {
            e.currentTarget.querySelector("a")?.click();
          }}
          sx={(theme) => ({
            "& a": {
              color: "inherit",
              textDecoration: "none",
            },
            "&:has(a.active)": {
              backgroundColor: `${theme.palette.action.selected}`,
              color: `${theme.palette.secondary.main}`,
            },
          })}
        >
          <ActiveNavLink to={to}>
            <Typography fontWeight={500} fontSize={24}>
              {name}
            </Typography>
          </ActiveNavLink>
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Box component="nav">
      <Box
        sx={(theme) => ({
          display: { xs: "none", xl: "flex" },
          gap: theme.spacing(4),
          "& a": {
            textDecoration: "none",
            color: "inherit",
            "&:visited": {
              color: "inherit",
            },
            "&.active": {
              borderBottom: `2px solid ${theme.palette.secondary.main}`,
              color: theme.palette.secondary.main,
              "& *": {
                fontWeight: "700",
              },
            },
            "&:hover": {
              color: theme.palette.secondary.main,
            },
          },
        })}
      >
        <NavLink to="/" name="Home" />
        <NavLink to="/members" name="Members" />
        <NavLink to="/subteams" name="Subteams" />
        <NavLink to="/projects" name="Projects" />
        <NavLink to="/sponsors" name="Sponsors" />
        <NavLink to="/donate" name="Donate" />
        <NavLink to="/apply" name="Join" />
        <NavLink to="/contact" name="Contact" />
      </Box>
      <Box sx={{ display: { xs: "block", xl: "none" } }}>
        <IconButton
          color="inherit"
          onClick={() => {
            setDrawerOpen((prev) => !prev);
          }}
        >
          <MenuIcon
            sx={{ height: { xs: "24px", md: "36px" }, width: "auto" }}
            color="inherit"
          />
        </IconButton>
      </Box>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        anchor="right"
        slotProps={{
          paper: {
            sx: (theme) => ({
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
            }),
          },
        }}
      >
        <Box sx={{ height: "100%", paddingLeft: "32px" }}>
          <Box
            sx={(theme) => ({
              height: "100%",
              width: "32px",
              backgroundColor: theme.palette.secondary.main,
              position: "absolute",
              left: "0",
            })}
          >
            <Box
              sx={{
                display: "flex",
                height: "100%",
                alignItems: "end",
                justifyContent: "center",
                paddingBottom: 1,
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={(theme) => ({
                  color: theme.palette.primary.dark,
                  backgroundColor: theme.palette.secondary.main,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                })}
              >
                <RocketIcon sx={{ width: "100%", height: "auto" }} />
                <Typography
                  sx={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    fontFamily: "Arial",
                    textTransform: "uppercase",
                    fontSize: "21px",
                    letterSpacing: 1,
                    fontWeight: 500,
                    userSelect: "none",
                  }}
                >
                  Saddleback Rocketry
                </Typography>
              </Box>
            </Box>
          </Box>
          <List sx={{ paddingLeft: 4, paddingRight: 4 }}>
            {renderDrawerNavLink("/", "Home")}
            {renderDrawerNavLink("/members", "Members")}
            {renderDrawerNavLink("/subteams", "Subteams")}
            {renderDrawerNavLink("/projects", "Projects")}
            {renderDrawerNavLink("/sponsors", "Sponsors")}
            {renderDrawerNavLink("/donate", "Donate")}
            {renderDrawerNavLink("/apply", "Join")}
            {renderDrawerNavLink("/contact", "Contact")}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
