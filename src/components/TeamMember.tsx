import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { Image } from "./Image";

type Props = {
  name: string;
  role?: string;
  image?: string;
};

export const TeamMember = (props: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={(theme) => ({
          width: "256px",
          height: "256px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${theme.palette.grey[300]}`,
        })}
      >
        <Image
          fallback={logo}
          crossOrigin="anonymous"
          alt={props.name}
          src={props.image}
          style={{ width: "256px", height: "256px", objectFit: "cover" }}
          scaleToW={512}
          scaleToH={512}
        />
      </Box>
      <Typography sx={{ marginTop: 1 }} fontWeight={500} variant="body2">
        {props.name}
      </Typography>

      {Boolean(props.role) && (
        <Typography sx={(theme) => ({ color: theme.palette.grey[700] })}>
          {props.role}
        </Typography>
      )}
    </Box>
  );
};
