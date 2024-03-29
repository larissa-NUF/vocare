import { Card, styled } from "@mui/material";
import { theme } from "../../styles/theme";

export const BsCard = styled(Card)({
    color:theme.palette.primary.dark,
    backgroundColor: "#fcfcfc",
    width:'360px',
    height: '100%',
    padding: theme.spacing(1.2),
    boxShadow: "0px 4px 30px rgba(0,0,0,0.15)",
    margin:"auto"
    
});
