import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { TextReference } from "../components/TextReference";
import { useDataContext } from "../contexts/Hooks";
import { Image } from "../components/Image";
import { Page } from "../components/Page";
import logo from "../assets/logo.png";
import { Text } from "../components/Text";

export const ProjectsPage = () => {
  const { projects } = useDataContext();

  return (
    <Page name="Projects">
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h2" gutterBottom>
            <TextReference refKey="projects.header" />
          </Typography>
          <Box>
            {projects.map((project) => {
              return (
                <Box key={project.name}>
                  <Divider
                    sx={(theme) => ({
                      margin: `${theme.spacing(4)} 0`,
                    })}
                  />
                  <Box
                    sx={(theme) => ({
                      display: "flex",
                      gap: theme.spacing(4),
                      justifyContent: "space-between",
                      flexWrap: "wrap-reverse",
                    })}
                  >
                    <Box
                      sx={{
                        maxWidth: { xs: "100%", lg: "35%" },
                        width: { xs: "100%" },
                      }}
                    >
                      <Image
                        alt={project.name}
                        src={project.imageUrl}
                        crossOrigin="anonymous"
                        fallback={logo}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{ maxWidth: { xs: "100%", lg: "60%" }, flexGrow: 1 }}
                    >
                      <Paper
                        elevation={3}
                        sx={{ padding: 4, minHeight: "50%" }}
                      >
                        <Box
                          component="header"
                          sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 2,
                            flexWrap: "nowrap",
                          }}
                        >
                          <Typography variant="h4">
                            <Text text={project.name} />
                          </Typography>
                          <Chip color="primary" label={project.year} />
                        </Box>
                        <Box>
                          <Typography variant="body2">
                            <Text text={project.description} />
                          </Typography>
                        </Box>
                      </Paper>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Page>
  );
};
