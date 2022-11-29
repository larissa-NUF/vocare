import { Grid, Link, styled, TextField, Typography } from "@mui/material";
import BasicCard from "../../components/basicCard";
import { MainButton } from "../../components/MainButton";
import { theme } from "../../styles/theme";

export const FundoAzul = styled("div")({
    width: "100%",
    background: 'linear-gradient(to left, #071844, #37689B)',
    height: "100vh",
    marginTop: "auto",
    marginBottom: "auto",
    display: "flex",
    alignItems: 'center',
    flexDirection: 'column'
    
    
    });

export const Logo = styled("img")({
    width: theme.spacing(31.25) 
});

export const GridLogo = styled(Grid)({
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto"
});

export const TituloCard = styled(Typography)({
    marginBottom:theme.spacing(1),
    marginTop: theme.spacing(0.8),
    fontSize:theme.spacing(1.65),
    textAlign: "center",
});

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

export const Label = styled(Typography)({
    textAlign: "left",
});

export const Btn = styled(MainButton)({
    width: theme.spacing(5)
});

export const DivBtn = styled("div")({
    textAlign: "center"
});

export const CardLogin = styled(BasicCard)({
  display: '-ms-flexbox',
  });

export const Txt = styled(Typography)({
  textAlign: "center",
  fontSize: theme.spacing(0.8),
  paddingTop: theme.spacing(1.3),
  paddingBottom: "0px",
});

export const CorLink = styled(Link)({
  color: theme.palette.primary.main,
  textDecoration: "underline",
  "&:hover":{
    color: theme.palette.secondary.main,
},
});