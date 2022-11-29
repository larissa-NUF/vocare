import { Grid, styled } from "@mui/material";
import { theme } from "../../../styles/theme";
import Fundo from "../../../assets/img/bg-sobre.jpg";
import '../estilo.css';


export const ContainerTeste = styled(Grid)({
    position: "relative",
    width: "100%",
    height: "100%",
    marginTop: theme.spacing(2),
    padding: "0px 100px 40px 100px",
    backgroundColor: "#0a2028",
    "&::before": {
        content: `''`,
        position: "absolute",
        backgroundImage: `url(${Fundo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
    }
});

export const TituloTeste = styled("h2")({
    position: "relative",
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2.25),
    fontWeight: "bold",
    textAlign: "center",
    cursor: "default",
});

export const Divider = styled("div")({
    position: "relative",
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
    position: "relative",
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

export const ConteudoTeste = styled(Grid)({
    position: "relative", 
    textAlign: "center", 
    marginTop: theme.spacing(1.5), 
    display: "flex", 
    flexDirection: "column",
    width: "78%", 
    marginLeft: "auto", 
    marginRight: "auto"
});