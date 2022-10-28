import { Box, Grid, styled } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { theme } from "../../styles/theme";
import { FaUserAlt as Fa } from 'react-icons/fa';

export const Container = styled(Grid)({
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
});

export const Lista = styled(Box)({
    backgroundColor: theme.palette.primary.main,
});

export const Titulo = styled("h2")({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    fontSize: theme.spacing(2.1),
    display: "flex",
    alignItems: "center"
});

export const Icon = styled(Fa)({
    marginRight: theme.spacing(1.125),
    height: theme.spacing(3.125)
});


export const Fundo = styled("div")({
    width: "100%",
    height: "5vh",
    backgroundColor: "#ededed",
    zIndex: 0,
    border: "solid 2px #d8d7d7"
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