import { Grid, styled, TextField, Typography } from "@material-ui/core";
import { autocompleteClasses } from "@mui/material";
import { MainButton } from "../../components/MainButton";
import { theme } from "../../styles/theme";

export const FundoAzul = styled("div")({
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    height: "100vh"
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
    fontSize:theme.spacing(1.625),
    textAlign: "center"
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