import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { TeamMember } from "../components/TeamMember";
import { Team } from "../components/Team";
import { useDataContext } from "../contexts/DataContext";
import { Page } from "../components/Page";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextReference } from "../components/TextReference";

export const OldMembersPage = () => {
  const { teams, archivedMembers } = useDataContext();

  const years = archivedMembers
    .reduce((prev, curr) => {
      if (curr.years) {
        for (const year of curr.years) {
          if (!prev.includes(year)) {
            prev.push(year);
          }
        }
      }
      return prev;
    }, [] as number[])
    .sort((a, b) => (a > b ? -1 : b > a ? 1 : 0));

  return (
    <Page name="Member Archive">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          "& .MuiAccordion-root": {
            margin: 0,
            "& button": {
              boxShadow:
                "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
            },
          },
        }}
      >
        <Box>
          <Typography variant="h2">
            <TextReference refKey="members.archive.header" />
          </Typography>
          <Typography variant="subtitle1">
            <TextReference refKey="members.archive.subheader" />
          </Typography>
        </Box>
        <Divider />
        {years.map((year) => {
          const members = archivedMembers.filter((x) =>
            x.years?.includes(year),
          );
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={(theme) => ({
                      fill: theme.palette.primary.main,
                      height: "48px",
                      width: "auto",
                    })}
                  />
                }
                sx={(theme) => ({ background: theme.palette.secondary.main })}
              >
                <Typography
                  variant="h4"
                  textAlign={"center"}
                  sx={{ flexGrow: 1 }}
                  color="primary"
                  fontWeight={500}
                >
                  {year.toFixed(0)} Team
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {teams?.map((team) => {
                    const teamMembers = members?.filter(
                      (member) => member.team == team.name,
                    );
                    if (!teamMembers.length) return null;
                    return (
                      <Team key={team.name} name={team.name}>
                        {teamMembers.map((x) => {
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
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Page>
  );
};
