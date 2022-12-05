import { Box, Button, ButtonBase, Grid, styled, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import { FaUserAlt as Fa } from 'react-icons/fa';
import { BsCheck2 } from "react-icons/bs";
import Calendar from "react-calendar";
import { SecundaryButton } from "../../components/SecundaryButton";
import { BtnSalaProps } from "../ListarSalas/ListarSalas.types";

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

export const BtnSala = styled(ButtonBase)<BtnSalaProps>(
    ({ status }) => ({
        padding: theme.spacing(0.5),
        borderRadius: theme.spacing(0.3),
        color: theme.palette.primary.light,

        ...(status === "criar" && {
            backgroundColor: theme.palette.primary.main,
            ":hover": {
                backgroundColor: theme.palette.secondary.main,
            },
        }),
        ...(status === "entrar" && {
            backgroundColor: "#6BC941",
            ":hover": {
                backgroundColor: "#5EB039",
            },
        }),
    }));

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

export const btnAgendadas = styled(SecundaryButton)({
    marginTop: theme.spacing(3)
});

export const TituloCard = styled(Typography)({
    color:theme.palette.secondary.main,
    fontSize: theme.spacing(1.625),
    marginBottom: theme.spacing(1.2),
    marginTop: theme.spacing(2.5)
    
});

