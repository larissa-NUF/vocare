
import { ButtonBase, styled } from "@mui/material";
import { theme } from "../../styles/theme";

export const SecundaryButton = styled(ButtonBase)(
    {
        minWidth: "178px",
        textAlign: "center",
        padding: theme.spacing(0.8),
        borderRadius: theme.spacing(1.563),
        color: theme.palette.primary.main,
        outline: `2px solid ${theme.palette.primary.main}`,  
        outlineOffset: "-2px",

        "&:hover":{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.grey[100],
            transition: "0.4s all ease-in-out"
        },
    }
);
