import { Grid, styled } from "@material-ui/core";
import { theme } from "../../../styles/theme";
import './estilo.css';


export const ContainerSobre = styled(Grid)({
    display: "flex", 
    maxWidth: "78%", 
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto"
});

export const TituloSobre = styled("h2")({
    fontSize: theme.spacing(2),
    textAlign: "center",
});

export const Divider = styled("div")({
    background: "#CCC",
    height: "4px",
    borderRadius: "4px",
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
    display: "flex"
});

export const Simbolo = styled("div")({
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    height: "10px",
    backgroundColor: theme.palette.primary.main,
    width: "10%",
    borderRadius: "4px",
    alignItems: "center",
    transform: "translateY(-25%)"
});