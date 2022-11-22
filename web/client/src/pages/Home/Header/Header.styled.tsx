import { Button, Grid, styled } from "@material-ui/core";
import { theme } from "../../../styles/theme";
import Logo from '../../assets/img/logo.png';
import { SecundaryButton } from "../../../components/SecundaryButton";
import "../estilo.css";


export const GridContainer = styled(Grid)({
    background: 'linear-gradient(to right, #071844, #37689B)',
    height: "85vh",
    zIndex: -1
});

export const LogoNav = styled("img")({
    height: theme.spacing(3.75),
    padding: theme.spacing(0.5),
    cursor: "pointer",
    "&:hover":{
        transform: "scale(1.1)",
        transition: "0.2s"
    }
});

export const GridNavItens = styled(Grid)({
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1.5),
    justifyContent: "center",
    alignItems: "center"
});

export const NavItem = styled("p")({
    color: "#fff",
    fontSize: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
        color: "#8EB9D4",
        transform: "scale(1.1)",
        transition: "0.2s"
    }
});

export const NavDireita = styled("div")({
    display: "flex",
    gap: theme.spacing(0.5),
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
        color: "#8EB9D4",
        transition: "0.2s",
        textDecoration: "underline",
        textDecorationColor: "#fff"
    }
});

export const ConteudoHeader = styled(Grid)({
    width: "78%", 
    display: "flex", 
    marginLeft: "auto", 
    marginRight: "auto",
    marginTop: theme.spacing(3),
    height: "60vh",
    flexDirection: "row",
    justifyContent: "center",
});

export const TituloHeader = styled("span")({
    fontSize: theme.spacing(3),
    color: "#c9e2fd",
    justifyContent: "start",
    display: "flex",
    margin: "16px 0 32px 0"
});

export const ImgHeader = styled("img")({
    "&:hover":{
        transform: "scale(1.1)",
        transition: "0.2s"
    }
});

export const Brands = styled(Grid)({
    width: "78%", 
    display: "flex", 
    flexDirection: "row", 
    marginLeft: "auto", 
    marginRight: "auto", 
    paddingTop: theme.spacing(1.5), 
    gap: theme.spacing(1)
});

export const BrandItem = styled(Grid)({
    height: theme.spacing(12.5), 
    width: theme.spacing(12.5), 
    border: "1px solid transparent",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: theme.spacing(1.5), 
    borderRadius: "10px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "initial",
    "&:hover": {
        backgroundColor: "#eceeef",
        transform: "translateY(-10%)",
        transition: "0.25s ease-in-out",
        // boxShadow: "2px 2px 2px 1px #469ED6"
    }
});