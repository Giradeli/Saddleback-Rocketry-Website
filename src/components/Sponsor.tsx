import { Box, Typography } from "@mui/material";

type Props = {
  name?: string;
  imageUrl?: string;
  link?: string;
};

export const Sponsor = (props: Props) => {
  const width = "320px";
  const height = "220px";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      <a href={props.link}>
        {props.imageUrl && (
          <img
            style={{
              height: height,
              width: width,
              maxWidth: width,
              minWidth: width,
              objectFit: "contain",
            }}
            alt={props.name}
            src={props.imageUrl}
          />
        )}
        {props.name && (
          <Box
            sx={(theme) => ({
              width: "256px",
              padding: theme.spacing(2),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.palette.background.paper,
              border: `2px solid ${theme.palette.common.black}`,
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            })}
          >
            <Typography
              sx={{ userSelect: "none" }}
              textAlign={"center"}
              fontSize={"2.2rem"}
              fontWeight={500}
            >
              {props.name}
            </Typography>
          </Box>
        )}
      </a>
    </Box>
  );
};
