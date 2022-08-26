
import { Button, ButtonBase, styled } from "@material-ui/core";
import { theme } from "../../styles/theme";

export const MainButton = styled(Button)(
    {
        minWidth: "178px",
        textAlign: "center",
        padding: theme.spacing(0.8),
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.spacing(1.563),
        color: theme.palette.grey[100],
        textTransform: "capitalize",
        "&:hover":{
            backgroundColor: theme.palette.secondary.main,
        },
    }
);
