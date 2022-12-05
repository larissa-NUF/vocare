import { Box, Grid, styled, TextField, Typography } from "@mui/material";
import { theme } from "../../../styles/theme";

export const ModalSala = styled(Box)({
    position: 'absolute',
    top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.primary.light,
  display: '-ms-flexbox',
  width:'360px',
    padding: theme.spacing(1.2),
  alignItems: 'center',
  borderRadius: theme.spacing(1)
});

export const Label = styled(Typography)({
  textAlign: "left",
});

export const Btn = styled(Grid)({
  marginTop: theme.spacing(1),
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