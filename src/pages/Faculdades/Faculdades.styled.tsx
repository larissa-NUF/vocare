import { Grid, styled } from "@material-ui/core";
import { theme } from "../../styles/theme";
import { FaUserGraduate as Fa, FaUserGraduate } from 'react-icons/fa';
import Card from '@mui/material/Card';

export const Container = styled(Grid)({
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
});

export const Titulo = styled("h2")({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
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
    alignItems: "row",
    gap: "44px",
    backgroundColor: "#FFF"
});

export const Conteudo = styled(Grid)({
    display: "flex", 
    alignItems: "row", 
    gap: "16px", 
    padding: "16px",
    border: "1px solid #ededed",
    borderRadius: "4"
});

export const Legenda = styled(Grid)({
    color: "#37689B",
    fontSize: "26px",
    Weight: "400px",
    lineHeight: "39px"
});

// export const CardFaculdades = styled(Card)({
//     backgroundColor: "#FFF"
// });
