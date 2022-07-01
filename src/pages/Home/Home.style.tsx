import { CardHeader, FormControl, styled, TextField } from "@material-ui/core";
import { theme } from "../../styles/theme";


export const FormInput = styled(TextField)({
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
})
