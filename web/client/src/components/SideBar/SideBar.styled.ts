import { Grid, styled } from "@mui/material";
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
    margin: "auto",
    backgroundColor: "#BE1106",
    gap: "12px",
    "&:hover":{
        backgroundColor: "#a71309",
    },
});

export const GridBotao = styled(Grid)({
    display: "flex", 
    marginBottom: 0, 
    height:"100%",
    marginTop: "auto",
    width:"100%",
    alignItems: "normal"
});