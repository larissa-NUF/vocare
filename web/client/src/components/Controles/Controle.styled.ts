import { IconButton, styled } from "@mui/material";
import { ControlesProps } from "./Controles.types";

export const controleMic = styled(IconButton)<ControlesProps>(
    ({ theme, Mic }) => ({
        margin: theme.spacing(1),
        width: theme.spacing(3),
        height: theme.spacing(3),
        ...(Mic && {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.light,
            ":hover": {
                backgroundColor: theme.palette.secondary.main,
            },
        }),
        ...(!Mic && {
            backgroundColor: theme.palette.grey[400],
            color: theme.palette.primary.dark,
            ":hover": {
                backgroundColor: theme.palette.grey[500],
            },
        }),
    }));

export const controleCam = styled(IconButton)<ControlesProps>(
    ({ theme, Cam }) => ({
        margin: theme.spacing(1),
        width: theme.spacing(3),
        height: theme.spacing(3),
        ...(Cam && {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.light,
            ":hover": {
                backgroundColor: theme.palette.secondary.main,
            },
        }),
        ...(!Cam && {
            backgroundColor: theme.palette.grey[400],
            color: theme.palette.primary.dark,
            ":hover": {
                backgroundColor: theme.palette.grey[500],
            },
        }),
    }));

export const desligar = styled(IconButton)(
    ({ theme }) => ({
        margin: theme.spacing(1),
        width: theme.spacing(3),
        height: theme.spacing(3),
        backgroundColor: '#CF0003',
        color: theme.palette.primary.light,
        ":hover": {
            backgroundColor: '#BA0003',
        },
    }));