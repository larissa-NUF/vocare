import { Grid, styled } from "@material-ui/core";
import { theme } from "../../styles/theme";
import { FaUserGraduate } from 'react-icons/fa';

export const Container = styled(Grid)({
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
});

export const Titulo = styled("h2")({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
    fontSize: theme.spacing(2.1),
    display: "flex",
    alignItems: "center"
});

export const Icon = styled(FaUserGraduate)({
    marginRight: theme.spacing(1.125),
    height: theme.spacing(3.125)
});


export const Fundo = styled("div")({
    width: "100%",
    height: theme.spacing(3.438),
    backgroundColor: "#ededed",
    zIndex: 0,
    border: "solid 2px #d8d7d7"
});

export const GridFaculdades = styled(Grid)({
    display: "flex",
    gap: "44px",
    backgroundColor: "#FFF"
});

export const Conteudo = styled(Grid)({
    display: "flex",
    gap: "16px", 
    padding: "16px",
    border: "1px solid #ededed",
    borderRadius: "5",
    flexDirection:"column",
    overflow: "auto",
    height: "70vh"
});

export const Legenda = styled("h2")({
    color: "#37689B",
    fontSize: "26px",
    lineHeight: "39px",
    alignItems: "center"
});

export const Card = styled(Grid)({
    border: "1px solid #ededed",
    borderRadius: "5",
    backgroundColor: "#FFF", 
    display: "flex",
    padding: "28px"
});

export const ItensCard = styled("div")({
    alignItems: "center",
    display: "flex",
    gap: theme.spacing(0.75),
    paddingBottom: "18px"
});

export const Pesquisa = styled(Grid)({
    border: "1px solid #ededed",
    borderRadius: "5",
    backgroundColor: "#FFF",
    color: "#A6B0B7",
    fontSize: "14px",
    marginBottom: theme.spacing(1.125),
    height: "38px",
    alignItems: "center",
    display: "flex",
    gap: "8px",
    paddingLeft: "12px"
});

export const TxtCard = styled("p")({
    color: "#424A4F",
    fontSize: "14px", 
    lineHeight: "21px",
    "&:hover":{
        color: theme.palette.primary.main,
        textDecoration: "underline"
    },
});