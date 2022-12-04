import { Box, Grid, styled, TextField, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import { MainButton } from "../MainButton";
import { IoMdAdd } from 'react-icons/io';

export const ModalSala = styled(Box)({
    position: 'absolute',
    top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.primary.light,
  display: '-ms-flexbox',
  width:'360px',
    padding: theme.spacing(1.2),
  alignItems: 'center',
  borderRadius: theme.spacing(1)
});


export const Btn = styled(Grid)({
  textAlign: 'end',
  width: '100%'
});

export const btnAdicionar = styled(MainButton)({
  marginBottom: theme.spacing(1),
});

export const iconAdd = styled(IoMdAdd)({
  marginRight: theme.spacing(1),
});

