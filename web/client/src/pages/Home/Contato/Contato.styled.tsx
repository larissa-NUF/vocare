import { Grid, styled } from "@mui/material";
import { theme } from "../../../styles/theme";
import "../estilo.css";


export const ContatoContainer = styled(Grid)({
    width: "100%", 
    backgroundColor: "#eceeef", 
    height: "auto", 
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column"
});

export const FormContainer = styled(Grid)({
    width: "78%", 
    height: "auto",
    marginLeft: "auto", 
    marginRight: "auto", 
    display: "flex", 
    flexDirection: "row",
    border: "1px solid #ccc", 
    borderRadius: "8px", 
    marginTop: theme.spacing(1), 
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
    transition: "0.5s ease",
    "&:hover": {
        color: theme.palette.primary.main,
        transition: "0.5s ease",
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