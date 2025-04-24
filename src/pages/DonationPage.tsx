import { Box, Container, Link, Paper, Typography } from "@mui/material";
import { TextReference } from "../components/TextReference";
import { Page } from "../components/Page";
import { useNavigate } from "react-router";

export const DonationPage = () => {
  const navigate = useNavigate();
  return (
    <Page name="Donate">
      <Container
        maxWidth={"lg"}
        sx={{ display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", rowGap: 2 }}>
          <Box
            sx={{ width: { xs: "100%", lg: "50%" }, padding: 4, paddingTop: 0 }}
          >
            <Typography variant="h2" textAlign={"center"} gutterBottom>
              <TextReference refKey="donate.header" />
            </Typography>
            <Typography variant="body2">
              <TextReference refKey="donate.preamble" />
            </Typography>
          </Box>

          <Box
            sx={{ width: { xs: "100%", lg: "50%" }, padding: 4, paddingTop: 0 }}
          >
            <Typography variant="h2" textAlign={"center"} gutterBottom>
              Saddleback College Foundation
            </Typography>
            <Typography gutterBottom variant="body2">
              Saddleback Rocketry donations are handled through the Saddleback
              College Foundation. The Foundation is organized exclusively for
              charitable and educational purposes as an IRS 501(c)3, meaning all
              donations are tax deductible.
            </Typography>
            <Typography variant="caption">
              More information about the Foundation can be found on their
              webpage{" "}
              <Link href="https://www.saddleback.edu/administration/office-president/saddleback-college-foundation">
                here
              </Link>
              .
            </Typography>
          </Box>
        </Box>

        <Box>
          <Paper
            elevation={3}
            sx={(theme) => ({
              padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
            })}
          >
            <Typography variant="h3" gutterBottom>
              How to give:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Box>
                <Typography
                  display={"inline"}
                  fontWeight={500}
                  variant="body2"
                  gutterBottom
                >
                  1){" "}
                </Typography>
                <Typography display={"inline"} variant="body2" gutterBottom>
                  Follow this link:{" "}
                  <Link
                    sx={{ wordBreak: "break-all" }}
                    fontWeight={500}
                    href="https://www.saddlebackcollegegiving.org/pages/general-giving-program"
                  >
                    https://www.saddlebackcollegegiving.org/pages/general-giving-program
                  </Link>
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  display={"inline"}
                  fontWeight={500}
                  gutterBottom
                >
                  2){" "}
                </Typography>
                <Typography display={"inline"} variant="body2">
                  Select{" "}
                </Typography>
                <Typography
                  display={"inline"}
                  fontWeight={500}
                  color="primary"
                  variant="body2"
                >
                  Give To
                </Typography>{" "}
                <Typography display={"inline"} variant="body2">
                  as{" "}
                </Typography>
                <Typography
                  display={"inline"}
                  fontWeight={500}
                  color="primary"
                  variant="body2"
                >
                  Other
                </Typography>
                <Typography display={"inline"} variant="body2">
                  , and type in{" "}
                </Typography>
                <Typography
                  display={"inline"}
                  fontWeight={500}
                  color="primary"
                  variant="body2"
                >
                  "Saddleback Rocketry Club"
                </Typography>{" "}
                <Typography display={"inline"} variant="body2">
                  into the{" "}
                </Typography>
                <Typography
                  display={"inline"}
                  fontWeight={500}
                  color="primary"
                  variant="body2"
                >
                  Other
                </Typography>
                <Typography display={"inline"} variant="body2">
                  {" "}
                  field.
                </Typography>
              </Box>
              <Box>
                <Typography
                  display={"inline"}
                  fontWeight={500}
                  variant="body2"
                  gutterBottom
                >
                  3)
                </Typography>{" "}
                <Typography display={"inline"} variant="body2">
                  Be sure to elaborate on who is donating in the comments or
                  specific requests so we can properly represent you.
                </Typography>
                <Typography display={"inline"} variant="body2">
                  If you would like to support us in another way, please reach
                  out to us on our{" "}
                  <Link
                    onClick={() => navigate("/contact")}
                    sx={{
                      fontWeight: "500",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    Contact
                  </Link>{" "}
                  page.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Page>
  );
};
