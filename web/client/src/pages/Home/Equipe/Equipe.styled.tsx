import { Grid, styled } from "@mui/material";
import { theme } from "../../../styles/theme";
import "../estilo.css";

export const EquipeContainer = styled(Grid)({
    display: "flex", 
    flexDirection: "column", 
    width: "90%",
    marginRight: "auto", 
    marginLeft: "auto",
    marginTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    height: "50vh"
});

export const GridCards = styled(Grid)({
    display: "flex", 
    flexDirection: "row", 
    marginBottom: theme.spacing(2),
    marginLeft: "auto", 
    marginRight: "auto", 
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(2)
});

export const CardEquipe = styled(Grid)({
    border: "1px solid #CCC", 
    borderRadius: "8px",
    width: theme.spacing(22),
    height: theme.spacing(22),
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#eceeef",
    textAlign: "center",
    padding: theme.spacing(0.5)
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

export const LinkContato = styled("a")({
    background: theme.palette.primary.main, 
    margin: "0 5px", 
    display: "inline-flex", 
    alignItems: "center", 
    justifyContent: "center", 
    width: "36px", 
    height: "36px", 
    borderRadius: "50%", 
    transition: "0.3s"
});

export const Social = styled("div")({
    position: "absolute", 
    left: "0", 
    top: "-18px", 
    right: "0", 
    opacity: "0", 
    transition: "ease-in-out 0.3s", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    "&:hover": {
        opacity: "1"
    }
});