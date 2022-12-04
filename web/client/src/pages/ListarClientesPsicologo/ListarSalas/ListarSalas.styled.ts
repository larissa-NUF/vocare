import { Box, Button, ButtonBase, Grid, styled } from "@mui/material";
import { theme } from "../../../styles/theme";
import { BtnSalaProps } from './ListarSalas.types';

export const Container = styled(Grid)({
    height: "100vh",
    backgroundColor: theme.palette.primary.light
});

export const TabelaContainer = styled("div")({
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
});

export const Lista = styled(Box)({
    backgroundColor: theme.palette.primary.main,
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

export const BtnSala = styled(ButtonBase)<BtnSalaProps>(
    ({ theme, status }) => ({
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

