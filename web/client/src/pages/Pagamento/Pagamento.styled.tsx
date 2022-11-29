import { Grid, styled, TextField, Typography } from "@mui/material";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { theme } from "../../styles/theme";

export const Fundo = styled("div")({
    backgroundColor: theme.palette.primary.light,
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
});

export const LogoVocare = styled("img")({
    width: theme.spacing(14.188),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.6)
});

export const EtapaTitulo = styled(Typography)({
    color: theme.palette.secondary.contrastText,
    fontSize: theme.spacing(1),
    marginBottom: theme.spacing(1.2),
});

export const TituloPag = styled(Typography)({
    marginBottom: theme.spacing(0.7),
    fontSize: theme.spacing(1.625),
});

export const Label = styled(Typography)({
    textAlign: "left",
});

export const FormInput = styled(TextField)({
    width: "100%",
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

export const Btn = styled(Grid)({
    marginTop: theme.spacing(1),
});

export const ArrowLeft = styled(BsArrowLeftShort)({
    paddingRight: theme.spacing(0.7),
    height: theme.spacing(1),
    width: theme.spacing(2),
});

export const ArrowRight = styled(BsArrowRightShort)({
    paddingLeft: theme.spacing(0.7),
    height: theme.spacing(1),
    width: theme.spacing(2),
});

export const GridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
});

export const FormPag = styled(TextField)({
    width: "100%",
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