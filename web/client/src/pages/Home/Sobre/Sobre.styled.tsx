import { Grid, styled } from "@material-ui/core";
import { theme } from "../../../styles/theme";
import '../estilo.css';


export const ContainerSobre = styled(Grid)({
    display: "flex", 
    width: "80%", 
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(2.5)
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

export const BgSobre = styled(Grid)({
    borderRadius: "10px", 
    backgroundColor: "#eceeef",
    padding: "48px 32px 48px 32px", 
    marginTop: theme.spacing(2.5), 
    display: "flex", 
    flexDirection: "row"
});

export const ConteudoSobre = styled("h4")({
    fontSize: theme.spacing(1.75), 
    fontWeight: "lighter",
    "&:hover":{
        textDecoration: "underline",
        textDecorationColor: theme.palette.primary.main,
        textDecorationThickness: "2px",
        textDecorationSkipInk: "auto",
    }
});