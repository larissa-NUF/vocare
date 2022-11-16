import { Box, Grid, styled } from "@material-ui/core";
import { theme } from "../../styles/theme";
import { AgoraVideoPlayer } from "agora-rtc-react";

export const ContainerPrincipal = styled("div")({
    height: "100vh",
});

export const GridUsers = styled(Grid)({
    padding:theme.spacing(5),
    height: "100%", 
    overflow: "hidden"
});

export const CameraDemais = styled(AgoraVideoPlayer)({
    width: "100%",
});