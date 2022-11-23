import { Button, Grid, styled } from "@material-ui/core";
import { theme } from "../../../styles/theme";
import "../estilo.css";

export const EquipeContainer = styled(Grid)({
    display: "flex", 
    flexDirection: "column", 
    width: "90%",
    marginRight: "auto", 
    marginLeft: "auto",
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    height: "50vh"
});

export const CardEquipe = styled(Grid)({
    border: "1px solid #CCC", 
    borderRadius: "10px",
    width: theme.spacing(21.875),
    display: "flex",
    height: theme.spacing(23.438),
    backgroundColor: "#eceeef"
});

export const DivTitulo = styled("div")({
    gap: "8px",  
    display: "flex", 
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
});

export const TituloSobre = styled("h2")({
    fontSize: theme.spacing(2.25),
    fontWeight: "bold",
    textAlign: "center",
    cursor: "default",
    "&:hover": {
        color: theme.palette.primary.main,
        transition: "0.5s",
    }
});

export const Divider = styled("div")({
    background: "#CCC",
    height: "4px",
    borderRadius: "4px",
    width: "10%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
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