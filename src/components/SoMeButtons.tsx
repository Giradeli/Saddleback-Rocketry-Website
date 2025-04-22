import { Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const SoMeButtons = () => {
  return (
    <Box sx={(theme) => ({ display: "flex", gap: theme.spacing(2) })}>
      <IconButton
        href="https://www.instagram.com/scrocketry_/"
        target="_blank"
        color="inherit"
      >
        <InstagramIcon sx={{ width: "auto", height: "40px" }} color="inherit" />
      </IconButton>
      <IconButton
        href="https://www.youtube.com/@SCRocketry"
        target="_blank"
        color="inherit"
      >
        <YouTubeIcon sx={{ width: "auto", height: "40px" }} color="inherit" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/company/sc-rocketry/"
        target="_blank"
        color="inherit"
      >
        <LinkedInIcon sx={{ width: "auto", height: "40px" }} color="inherit" />
      </IconButton>
    </Box>
  );
};
