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
}); //sem uso por enquanto

export const Titulo = styled("h2")({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
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
    height: theme.spacing(3.438),
    backgroundColor: "#ededed",
    zIndex: 0,
    border: "solid 2px #d8d7d7"
});