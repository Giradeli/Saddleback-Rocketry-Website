import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { TextReference } from "../components/TextReference";
import { useDataContext } from "../contexts/DataContext";
import { Image } from "../components/Image";
import { Page } from "../components/Page";

export const ProjectsPage = () => {
  const { projects } = useDataContext();

  return (
    <Page name="Projects">
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h2" gutterBottom>
            <TextReference refKey="projects.header" />
          </Typography>
          <Box>
            {projects.map((project) => {
              return (
                <Box>
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
                    key={project.name}
                  >
                    <Box sx={{ maxWidth: { xs: "100%", lg: "35%" } }}>
                      <Image
                        alt={project.name}
                        src={project.imageUrl}
                        crossOrigin="anonymous"
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
                            flexWrap: "wrap",
                          }}
                        >
                          <Typography variant="h4">{project.name}</Typography>
                          <Chip color="primary" label={project.year} />
                        </Box>
                        <Box>
                          <Typography variant="body2">
                            {project.description}
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
