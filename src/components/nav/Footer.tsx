import { Box, Link, Typography } from "@mui/material";
import { FooterSection } from "./FooterSection";
import { SoMeButtons } from "../SoMeButtons";
import EmailIcon from "@mui/icons-material/AlternateEmail";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        padding: theme.spacing(4),
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.main,
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexGrow: 1,
          gap: theme.spacing(4),
          flexWrap: "wrap",
          justifyContent: "center",
        })}
      >
        <Box
          sx={{
            flexGrow: 1,
            width: { xs: "100%", xl: "auto" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", xl: "start" },
          }}
        >
          <Typography textAlign={"center"} variant="h2" fontWeight={700}>
            Saddleback Rocketry
          </Typography>
          <SoMeButtons />
        </Box>
        <FooterSection name="Location">
          <Typography>
            28000 Marguerite Pkwy, Mission Viejo, CA 92692
          </Typography>
        </FooterSection>
        <FooterSection name="Contact">
          <Link
            sx={{ color: "inherit" }}
            href={`mailto:scrocketry33@gmail.com`}
            style={{ display: "flex", gap: "4px" }}
          >
            <EmailIcon sx={{ width: "20px" }} />
            <Typography>scrocketry33@gmail.com</Typography>
          </Link>
        </FooterSection>
      </Box>
    </Box>
  );
};
