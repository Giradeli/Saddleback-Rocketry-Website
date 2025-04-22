import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { ImageReference } from "../components/ImageReference";
import { TextReference } from "../components/TextReference";
import { Page } from "../components/Page";

export const ApplyPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <Page name="Join">
      <Container maxWidth="lg">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <Box sx={{ width: { xs: "100%", lg: "50%" }, flexGrow: 1 }}>
              <Paper
                elevation={3}
                sx={(theme) => ({
                  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing(4),
                })}
              >
                <Typography variant="h3">
                  <TextReference refKey="apply.header" />
                </Typography>
                <Typography variant="body2">
                  <TextReference refKey="apply.subheader" />
                </Typography>
                <Button
                  size="large"
                  variant="outlined"
                  onClick={() => setModalOpen(true)}
                >
                  Join Now
                </Button>
              </Paper>
            </Box>
            <Box sx={{ width: { xs: "100%", lg: "40%" }, flexGrow: 1 }}>
              <ImageReference
                refKey="apply.poster"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Container
          maxWidth="md"
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              minHeight: "60vh",
              height: "90vh",
              minWidth: "640px",
              padding: 4,
              flexGrow: 1,
            }}
          >
            <Paper
              elevation={3}
              sx={() => ({
                height: "100%",
                padding: `3px 0`,
              })}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSebV0-8O5P2th-R4l9wdgFIJGcZ79_6v35cTDhz_U90s0sy8g/viewform?embedded=true"
                width="100%"
                height="100%"
              >
                Loading…
              </iframe>
            </Paper>
          </Box>
        </Container>
      </Modal>
    </Page>
  );
};
