import { Typography } from "@mui/material";
import { NavLink as ReactRouterNavLink } from "react-router";

type Props = {
  to: string;
  name: string;
};

export const NavLink = (props: Props) => {
  return (
    <ReactRouterNavLink to={props.to}>
      <Typography sx={{ paddingBottom: "3px" }} fontSize={20}>
        {props.name}
      </Typography>
    </ReactRouterNavLink>
  );
};
