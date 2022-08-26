import { Grid, styled } from "@material-ui/core";
import { theme } from "../../styles/theme";

export const SideBar = styled(Grid)({
    width: "100%",
    height: "100vh",
    background: theme.palette.background.default,
    paddin: "10px",
});

export const MenuItem = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "18px",
});