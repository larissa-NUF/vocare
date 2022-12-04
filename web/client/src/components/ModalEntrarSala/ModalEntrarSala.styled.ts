import { Box, styled } from "@mui/material";
import { theme } from "../../styles/theme";
import { MainButton } from "../MainButton";

export const ModalSala = styled(Box)({
    position: 'absolute',
    top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(5),
  alignItems: 'center'
});

export const WebCam = styled("video")({
  height:'40vh', 
  width: '53.5vh',
  backgroundColor: 'black'
});

export const btnEntrar = styled(MainButton)({
  width: '100%'
});