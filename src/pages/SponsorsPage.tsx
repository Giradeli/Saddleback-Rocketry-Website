import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { useDataContext } from "../contexts/Hooks";
import { Sponsor } from "../components/Sponsor";
import { TextReference } from "../components/TextReference";
import { Page } from "../components/Page";
import { useNavigate } from "react-router";

export const SponsorsPage = () => {
  const { sponsorTypes, sponsors } = useDataContext();

  const navigate = useNavigate();
  return (
    <Page name="Sponsors">
      <Container maxWidth="xl">
        <Box sx={(theme) => ({ marginBottom: theme.spacing(8) })}>
          <Typography
            variant="h2"
            fontWeight={400}
            textAlign={"center"}
            gutterBottom
          >
            <TextReference refKey="sponsors.header" />
          </Typography>
          <Typography variant="h4" textAlign={"center"}>
            <TextReference refKey="sponsors.subheader" />
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(4),
          })}
        >
          {sponsorTypes.map((type) => {
            const filteredSponsors = sponsors.filter(
              (x) => x.type == type.name,
            );
            return (
              <Box key={type.name}>
                <Divider sx={(theme) => ({ marginBottom: theme.spacing(4) })} />
                <Box>
                  <Typography
                    textAlign={"center"}
                    variant="h2"
                    sx={{ marginBottom: 4 }}
                  >
                    {type.name}
                  </Typography>
                  <Box
                    sx={(theme) => ({
                      width: "100%",
                      display: "flex",
                      columnGap: theme.spacing(8),
                      rowGap: theme.spacing(2),
                      justifyContent: "center",
                      flexWrap: "wrap",
                    })}
                  >
                    {filteredSponsors.map((sponsor) => {
                      return (
                        <Sponsor
                          name={sponsor.displayName}
                          imageUrl={sponsor.imageUrl}
                          link={sponsor.link}
                          key={sponsor.name}
                        />
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            );
          })}
          <Divider />
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(2),
              padding: "0 10%",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <Typography variant="h4" textAlign={"center"} gutterBottom>
              <TextReference refKey="sponsors.donate-btn" />
            </Typography>
            <Box>
              <Button
                size="large"
                variant="outlined"
                sx={{ fontSize: "2rem" }}
                onClick={() => navigate("/donate")}
              >
                Donate
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Page>
  );
};
