import { Box, Container, Paper, Typography } from "@mui/material";
import { TextReference } from "../components/TextReference";
import { ContactForm } from "../components/ContactForm";
import { Page } from "../components/Page";

export const ContactPage = () => {
  return (
    <Page name="Contact">
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexWrap: "wrap-reverse" }}
      >
        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          <Paper
            elevation={3}
            sx={(theme) => ({
              padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
            })}
          >
            {" "}
            <Typography variant="h3" gutterBottom>
              <TextReference refKey="contact.header" />
            </Typography>
            <ContactForm />
          </Paper>
        </Box>
        <Box
          sx={(theme) => ({
            flexGrow: 1,
            width: { xs: "100%", md: "40%" },
            padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
            marginBottom: theme.spacing(4),
          })}
        >
          <Typography variant="body2">
            <TextReference refKey="contact.preamble" />
          </Typography>
        </Box>
      </Container>
    </Page>
  );
};
