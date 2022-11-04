import { Button, Grid, styled } from "@material-ui/core";
import { theme } from "../../styles/theme";
import Logo from '../../assets/img/logo.png';
import { SecundaryButton } from "../../components/SecundaryButton";


export const GridContainer = styled(Grid)({
    background: 'linear-gradient(to right, #071844, #37689B)',
    height: "90vh",
    zIndex: -1
});

export const LogoNav = styled("img")({
    height: "60px",
    padding: "5px",
    cursor: "pointer",
    "&:hover":{
        transform: "scale(1.1)",
        transition: "0.2s"
    }
});

export const GridNavItens = styled(Grid)({
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    justifyContent: "center"
});

export const NavItem = styled("p")({
    color: "#fff",
    fontSize: "16px",
    paddingTop: "18px",
    cursor: "pointer",
    "&:hover": {
        color: "#8EB9D4",
        transform: "scale(1.1)",
        transition: "0.2s"
    }
});

export const NavDireita = styled("div")({
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
        color: "#8EB9D4",
        transition: "0.2s",
        textDecoration: "underline",
        textDecorationColor: "#fff"
    }
});

export const GridConteudoHeader = styled(Grid)({
    width: "78%", 
    display: "flex", 
    marginLeft: "auto", 
    marginRight: "auto",
    marginTop: theme.spacing(2),
    height: "60vh"
});

export const TituloHeader = styled("span")({
    backgroundColor: theme.palette.primary.main, 
    fontSize: "40px", 
    color: "#c9e2fd", 
    justifyContent: "start",
});

export const ImgHeader = styled("img")({
    "&:hover":{
        transform: "scale(1.1)",
        transition: "0.2s"
    }
});