import { Box, Button, ButtonBase, Grid, styled } from "@mui/material";
import { theme } from "../../styles/theme";
import { FaUserAlt as Fa } from 'react-icons/fa';
import { BsCheck2 } from "react-icons/bs";
import Calendar from "react-calendar";

export const Titulo = styled("h2")({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    fontSize: theme.spacing(2.1),
    display: "flex",
    alignItems: "center"
});

export const Fundo = styled("div")({
    width: "100%",
    height: "5vh",
    backgroundColor: "#ededed",
    zIndex: 0,
    border: "solid 2px #d8d7d7"
});

export const Icon = styled(Fa)({
    marginRight: theme.spacing(1.125),
    height: theme.spacing(3.125)
});



export const Container = styled(Grid)({
    height: "100vh",
    backgroundColor: theme.palette.primary.light,
    width: '100%'
});

export const TabelaContainer = styled("div")({
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
});
export const Tabela = styled("div")({
    width: "40vw",
});


export const Lista = styled(Box)({
    backgroundColor: theme.palette.primary.main,
});

export const Aceitar = styled(BsCheck2)({
    marginRight: theme.spacing(0.5)
});


export const Pesquisa = styled(Grid)({
    border: "1px solid #ededed",
    borderRadius: "5",
    backgroundColor: "#FFF",
    color: "#A6B0B7",
    fontSize: "14px",
    marginBottom: theme.spacing(1.125),
    height: "38px",
    alignItems: "center",
    display: "flex",
    gap: "8px",
    paddingLeft: "12px"
});
