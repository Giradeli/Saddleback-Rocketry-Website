import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { TeamMember } from "../components/TeamMember";
import { Team } from "../components/Team";
import { useNavigate } from "react-router";
import { useDataContext } from "../contexts/DataContext";
import { ImageReference } from "../components/ImageReference";
import { TextReference } from "../components/TextReference";
import { Page } from "../components/Page";

export const MembersPage = () => {
  const { teams, teamMembers } = useDataContext();

  const navigate = useNavigate();

  return (
    <Page name="Members">
      <Box
        sx={(theme) => ({
          display: "flex",
          gap: theme.spacing(4),
          justifyContent: "space-between",
          marginBottom: `${theme.spacing(8)}`,
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
            style={{ width: "100%", height: "auto" }}
            alt="Our team"
          />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Paper
            elevation={3}
            sx={(theme) => ({
              padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
              display: "flex",
              flexDirection: "column",
            })}
          >
            <Typography variant="h3" gutterBottom>
              <TextReference refKey="members.header" />
            </Typography>
            <Typography variant="body2" gutterBottom>
              <TextReference refKey="members.subheader" />
            </Typography>
            <Button
              sx={{ marginTop: 2, alignSelf: "end" }}
              variant="outlined"
              onClick={() => navigate("/members/archive")}
            >
              Previous Teams
            </Button>
          </Paper>
        </Box>
      </Box>
      <Divider sx={{ marginBottom: 4 }} />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(4),
        })}
      >
        {teams?.map((team) => {
          const members = teamMembers.filter(
            (member) => member.team == team.name,
          );
          return (
            <Team key={team.name} name={team.name}>
              {members.map((x) => {
                return (
                  <TeamMember
                    key={x.name}
                    name={x.name}
                    role={x.title}
                    image={x.imageUrl}
                  />
                );
              })}
            </Team>
          );
        })}
      </Box>
    </Page>
  );
};
