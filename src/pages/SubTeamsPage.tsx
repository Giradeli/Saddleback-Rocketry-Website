import { useRef } from "react";
import { Page } from "../components/Page";
import { useDataContext } from "../contexts/Hooks";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { TextReference } from "../components/TextReference";
import { Image } from "../components/Image";
import { Text } from "../components/Text";

export const SubTeamsPage = () => {
  const { subTeams } = useDataContext();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Page name="Subteams">
      <Container maxWidth="lg" ref={containerRef}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box>
            <Box>
              <Typography variant="h2" gutterBottom>
                <TextReference refKey="subteams.header" />
              </Typography>
              <Typography variant="subtitle1">
                <TextReference refKey="subteams.subheader" />
              </Typography>
            </Box>
            <Box sx={{ paddingTop: 4 }}>
              <Typography gutterBottom fontWeight={500}>
                <TextReference refKey="subteams.toc-btns" />
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
                {subTeams.map((subTeam) => {
                  const i = subTeams.findIndex((x) => x.name == subTeam.name);
                  return (
                    <Box key={subTeam.name}>
                      <Button
                        onClick={() => {
                          const element = containerRef.current?.querySelector(
                            `#subteam-${i}`,
                          );
                          element?.scrollIntoView({
                            block: "start",
                          });
                        }}
                      >
                        {subTeam.name}
                      </Button>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {subTeams.map((subTeam, i) => {
              return (
                <Box
                  id={`subteam-${i}`}
                  key={subTeam.name}
                  sx={{ display: "flex", gap: 4 }}
                >
                  <Paper
                    elevation={3}
                    sx={() => ({
                      display: "flex",
                      flexGrow: 1,
                    })}
                  >
                    <Box
                      sx={(theme) => ({
                        userSelect: "none",
                        flexShrink: 0,
                        backgroundColor: theme.palette.secondary.main,
                        paddingTop: 2,
                        paddingBottom: 2,
                        borderRadius: `4px 0 0 4px`,
                        display: { xs: "none", md: "block" },
                      })}
                    >
                      <Typography
                        sx={(theme) => ({
                          color: theme.palette.primary.dark,
                          writingMode: "vertical-lr",
                        })}
                        fontSize={32}
                      >
                        {subTeam.name}
                      </Typography>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                      <Typography variant="h4">
                        <Text text={subTeam.name} />
                      </Typography>
                      <Typography variant="body2">
                        <Text text={subTeam.description} />
                      </Typography>
                    </Box>
                  </Paper>
                  {subTeam.imageUrl && (
                    <Box
                      sx={{
                        maxWidth: "30%",
                        flexShrink: 0,
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "4px",
                          objectFit: "cover",
                        }}
                        src={subTeam.imageUrl}
                      />
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Page>
  );
};
