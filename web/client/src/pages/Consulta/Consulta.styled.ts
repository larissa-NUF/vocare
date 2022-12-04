import { styled } from "@mui/material";
import { theme } from "../../styles/theme";

export const CameraLocal = styled("video")({
    width: theme.spacing(13),
    height: theme.spacing(9.9),
    top: theme.spacing(25),
    right: theme.spacing(47),
    backgroundColor: 'black'

    });

export const videos = styled("div")({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: '100vh',
    backgroundColor: theme.palette.primary.light
});

export const videoRemoto = styled("video")({
    position: 'relative',
    width: theme.spacing(44),
    height: theme.spacing(33),
    backgroundColor: 'black'
    
    

});

export const videoLocal = styled("div")({
    position: 'absolute',
    zIndex: 1000,
    width: theme.spacing(44),
    height: theme.spacing(33),
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
    padding: theme.spacing(1)
});