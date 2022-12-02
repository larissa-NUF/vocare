import { Grid, styled } from "@mui/material";
import { theme } from "../../../styles/theme";
import "../estilo.css";


export const ContatoContainer = styled(Grid)({
    width: "100%", 
    backgroundColor: "#eceeef", 
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(3.5),
    marginTop: theme.spacing(1),
});

export const FormContainer = styled(Grid)({
    width: "78%", 
    height: "auto",
    marginLeft: "auto", 
    marginRight: "auto", 
    display: "flex", 
    flexDirection: "row",
    borderRadius: "8px", 
    marginTop: theme.spacing(1.5), 
    boxShadow: "0px 3px 15px 0px #00000022"
});

export const TextArea = styled("textarea")({
    borderRadius: "6px",
    border: "1px solid #c9c9c9",
    font: "inherit",
    fontSize: "14px",
    color: "#2b2d2e",
    letterSpacing: "inherit",
    padding: "8px 12px 8px 12px",
    marginBottom: theme.spacing(2),
    ":focus": {
        outline: "none !important",
        border: "2px solid #469ED6"
    },
    "::-webkit-input-placeholder": {
        color: "#2b2d2e",
        opacity: 1
    }
});

export const CardInfos = styled(Grid)({
    backgroundColor: theme.palette.primary.main,
    borderRadius: "8px", 
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "6.875em",
    padding: theme.spacing(1)
});

export const DivIcon = styled("div")({
    borderRadius: "100%", 
    backgroundColor: "#8ad1fb", 
    justifyContent: "center", 
    alignItems: "center", 
    padding: "8px", 
    display: "flex", 
    width: theme.spacing(3.125), 
    height: theme.spacing(3.125),
    transition: ".3s ease-in",
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