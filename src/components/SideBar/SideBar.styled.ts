import { Grid, styled } from "@material-ui/core";
import { theme } from "../../styles/theme";
import { MainButton } from "../MainButton";

export const SideBar = styled(Grid)({
    width: "100%",
    height: "100vh",
    background: theme.palette.background.default,
});

export const MenuItem = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    color: "white",
    fontSize: "18px",
    gap: "16px"
});

export const Itens = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    paddingLeft: "28px",
    marginBottom: "28px"
});

export const Layout = styled(Grid)({
    justifyContent: "left",
});

export const BotaoSair = styled(MainButton)({
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    backgroundColor: "#BE1106",
    "&:hover":{
        backgroundColor: "#a71309",
    },
});