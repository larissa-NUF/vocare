import { Button, styled } from "@material-ui/core";
import { theme } from "../../styles/theme";

export const Btn = styled(Button)({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.light,
    borderRadius: theme.spacing(5),
    padding: theme.spacing(0.7),
    fontSize: theme.spacing(0.8),
    minWidth: '169px',
    '& :hover' : {
        backgroundColor: theme.palette.secondary.main,

    }
})
