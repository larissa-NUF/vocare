import { Grid, Link, styled, TextField, Typography } from "@material-ui/core";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import BasicCard from "../../components/basicCard";
import { SecundaryButton } from "../../components/SecundaryButton";

import { theme } from "../../styles/theme";


export const FormInput = styled(TextField)({
  width:"100%",
    '& label.Mui-focused': {
      color: theme.palette.primary.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
     
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
  });

export const Fundo = styled("div")({
    backgroundColor: theme.palette.primary.light,
    width: '100%',
    height:'100vh',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
});

export const Titulo= styled("div")({
  width:"25%",
  minWidth:"360px",
});

export const LogoVocale = styled("img")({
  width: theme.spacing(14.188),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(0.6)
});

export const Label = styled(Typography)({
  textAlign: "left",
});

export const Btn = styled(Grid)({
  marginTop: theme.spacing(1),
});

export const ArrowLeft = styled(BsArrowLeftShort)({
  paddingRight:theme.spacing(0.7),
  height: theme.spacing(1),
   width: theme.spacing(2),
});

export const ArrowRight = styled(BsArrowRightShort)({
  paddingLeft:theme.spacing(0.7),
  height: theme.spacing(1),
   width: theme.spacing(2),
});

export const EtapaTitulo = styled(Typography)({
  color:theme.palette.secondary.contrastText,
  fontSize:theme.spacing(1),
  marginBottom:theme.spacing(1.2),
});

export const TituloCard = styled(Typography)({
 marginBottom:theme.spacing(0.7),
 fontSize:theme.spacing(1.625),
});
export const CardPlanos = styled(BasicCard)({
  height:theme.spacing(60.625),
  color: "white",
  backgroundColor: "#f000",
  width: "100%"
});

export const DivBeneficio = styled("div") ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
  
});

export const FundoGratis = styled("div")({
  backgroundColor: theme.palette.primary.main,
  width: "100%"

});

export const TxtCadastro = styled(Typography)({
  textAlign: "left",
  fontSize: theme.spacing(0.8),
  paddingTop: theme.spacing(0.7),
  marginBottom: "none",

});

export const CorLinkCad = styled(Link)({
  color: theme.palette.primary.main,
  textDecoration: "underline",
  "&:hover":{
    color: theme.palette.secondary.main,
},
});

export const DivCadastro = styled("div")({
  marginLeft: "-10px"
});

export const TxtBtn = styled("p")({
  padding: "none",
  fontSize: "0.9em",
  margin: "none"
});

export const TxtBtnVoltar = styled("p")({
  fontSize: "1em",
  margin: "3px"
});

export const Txt = styled(Typography)({
  textAlign: "center",
  fontSize: theme.spacing(0.8),
  paddingTop: theme.spacing(0.5),
  paddingBottom: "0px",
});

export const CorLink = styled(Link)({
  color: theme.palette.primary.main,
  textDecoration: "underline",
  "&:hover":{
    color: theme.palette.secondary.main,
},
});