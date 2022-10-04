import { Card, styled, Typography } from "@material-ui/core";
import { theme } from "../../../styles/theme";

export const BsCard = styled(Card)({
    color:theme.palette.primary.dark,
    border: "1px solid #DEDEDE",
    padding: theme.spacing(1.2),
    margin:"auto",
    boxShadow: "none"
    
});

export const Titulo = styled(Typography)({
    color:theme.palette.secondary.main,
    fontSize: theme.spacing(1.625)
    
});

