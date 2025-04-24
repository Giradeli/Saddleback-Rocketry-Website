import { Box, Button, Paper, Typography } from "@mui/material";
import gallery1Placeholder from "../assets/gallery-1.jpg";
import gallery2Placeholder from "../assets/gallery-2.jpg";
import gallery3Placeholder from "../assets/gallery-3.jpg";
import gallery4Placeholder from "../assets/gallery-4.jpg";
import teamPhotoPlaceholder from "../assets/team-image-placeholder.png";
import { useNavigate } from "react-router";
import { SoMeButtons } from "../components/SoMeButtons";
import { TextReference } from "../components/TextReference";
import { ImageReference } from "../components/ImageReference";
import { Page } from "../components/Page";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Page
      sx={(theme) => ({
        padding: "0 !important",
        position: "relative",
        display: "flex",
        gap: theme.spacing(8),
        flexDirection: "column",
        paddingBottom: `${theme.spacing(4)} !important`,
      })}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.main,
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            padding: { xs: theme.spacing(2), lg: theme.spacing(8) },
            borderBottom: `2px solid ${theme.palette.grey[500]}`,
            boxShadow:
              "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);",
          })}
        >
          <Box
            sx={(theme) => ({
              maxWidth: { xs: "90%", lg: "50%" },
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(4),
              zIndex: 1,
            })}
          >
            <Typography variant="h1" textAlign={"center"}>
              <TextReference refKey="home.header" />
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"}>
              <TextReference refKey="home.subheader" />
            </Typography>
            <Box
              sx={(theme) => ({
                display: "flex",
                gap: theme.spacing(8),
                justifyContent: "center",
              })}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography fontWeight={500} textAlign={"center"} gutterBottom>
                  <TextReference refKey="home.apply-btn" />
                </Typography>
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  onClick={() => navigate("/apply")}
                >
                  Join us
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography fontWeight={500} textAlign={"center"} gutterBottom>
                  <TextReference refKey="home.donate-btn" />
                </Typography>
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  onClick={() => navigate("/sponsors")}
                >
                  Sponsor us
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          gap: theme.spacing(4),
          justifyContent: "space-between",
          padding: `0 ${theme.spacing(4)}`,
        })}
      >
        <Box
          sx={{
            width: "60%",
            flexShrink: 0,
            display: { xs: "none", md: "block" },
          }}
        >
          <ImageReference
            refKey="global.team-photo"
            fallback={teamPhotoPlaceholder}
            alt="Our team"
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={() => ({
            flexGrow: 1,
          })}
        >
          <Paper
            elevation={3}
            sx={(theme) => ({
              padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(2),
            })}
          >
            <Typography variant="h3">
              <TextReference refKey="home.about-team-header" />
            </Typography>
            <Box>
              <Typography variant="body2">
                <TextReference refKey="home.about-team" />
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={500}>
                <TextReference refKey="home.members-btn" />
              </Typography>
              <Button variant="outlined" onClick={() => navigate("/members")}>
                Members
              </Button>
            </Box>
            <Box>
              <Typography fontWeight={500}>
                <TextReference refKey="home.subteams-btn" />
              </Typography>
              <Button variant="outlined" onClick={() => navigate("/subteams")}>
                Subteams
              </Button>
            </Box>
            <Box>
              <Typography fontWeight={500}>
                <TextReference refKey="home.projects-btn" />
              </Typography>
              <Button variant="outlined" onClick={() => navigate("/projects")}>
                Projects
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" textAlign={"center"} gutterBottom>
          <TextReference refKey="home.socials-header" />
        </Typography>
        <SoMeButtons />
      </Box>
      <Box>
        <Typography textAlign={"center"} variant="h2" gutterBottom>
          <TextReference refKey="home.gallery-header" />
        </Typography>
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: theme.spacing(2),
          })}
        >
          <ImageReference
            refKey="home.gallery-1"
            style={{ width: "256px", height: "256px" }}
            scaleToH={256}
            scaleToW={256}
            fallback={gallery1Placeholder}
          />
          <ImageReference
            refKey="home.gallery-2"
            style={{ width: "256px", height: "256px" }}
            scaleToH={256}
            scaleToW={256}
            fallback={gallery2Placeholder}
          />
          <ImageReference
            refKey="home.gallery-3"
            style={{ width: "256px", height: "256px" }}
            scaleToH={256}
            scaleToW={256}
            fallback={gallery3Placeholder}
          />
          <ImageReference
            refKey="home.gallery-4"
            style={{ width: "256px", height: "256px" }}
            scaleToH={256}
            scaleToW={256}
            fallback={gallery4Placeholder}
          />
        </Box>
      </Box>
    </Page>
  );
};
