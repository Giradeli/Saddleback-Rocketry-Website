import { AppBar, Box, Typography } from "@mui/material";

import { NavMenu } from "./NavMenu";
import { Link } from "react-router";
import logo from "../../assets/LogoNoText.png";
import { Image } from "../Image";

export const Header = () => {
  return (
    <>
      <AppBar
        component="header"
        position="sticky"
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme.palette.primary.dark,
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            padding: `0 ${theme.spacing(2)}`,
          })}
        >
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: theme.spacing(4),
            })}
          >
            <Box
              flexGrow={"1"}
              sx={{
                "& a": {
                  textDecoration: "none",
                  color: "inherit",
                },
              }}
            >
              <Box
                sx={{
                  "& a": {
                    display: "flex",
                    alignItems: "center",
                    "& img": {
                      height: { xs: "32px", md: "42px" },
                      width: "auto",
                      marginRight: { xs: 1, md: 2 },
                    },
                  },
                }}
              >
                <Link
                  to="/"
                  style={{ width: "fit-content", userSelect: "none" }}
                >
                  <Image
                    src={logo}
                    alt="Saddleback Rocketry"
                    crossOrigin="anonymous"
                    style={{ boxShadow: "unset" }}
                  />
                  <Typography
                    sx={(theme) => ({
                      fontSize: "36px",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "24px",
                      },
                    })}
                    letterSpacing={0.1}
                    fontWeight={500}
                    noWrap
                    display={"inline"}
                  >
                    Saddleback Rocketry
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box>
              <NavMenu />
            </Box>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};
