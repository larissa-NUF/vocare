import { Grid, styled } from "@material-ui/core";
import { theme } from "../../styles/theme";
import Logo from '../../assets/img/logo.png';
import { SecundaryButton } from "../../components/SecundaryButton";


export const GridContainer = styled(Grid)({
    background: 'linear-gradient(to right, #071844, #37689B)',
    height: "80vh",
    zIndex: 1000
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
    color: "#fff",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "16px",
    "&:hover": {
        color: "#8EB9D4",
        transform: "scale(1.1)",
        transition: "0.2s"
    }
});