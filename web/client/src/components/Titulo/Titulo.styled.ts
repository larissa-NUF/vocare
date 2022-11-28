import { styled } from "@mui/material";
import { theme } from "../../styles/theme";

export const Titulo = styled("div")({
    color: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    fontSize: theme.spacing(2),

    "& svg":{
        marginRight: theme.spacing(0.5)
    }
});