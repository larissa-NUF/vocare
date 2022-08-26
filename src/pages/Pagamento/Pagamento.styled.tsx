import { Card, Grid, Link, styled, TextField, Typography } from "@material-ui/core";
import { autocompleteClasses } from "@mui/material";
import BasicCard from "../../components/BasicCard";
import { MainButton } from "../../components/MainButton";
import { theme } from "../../styles/theme";

export const TituloPag = styled(Typography)({
    marginBottom:theme.spacing(0.7),
    fontSize:theme.spacing(1.625),
   });

export const Label = styled(Typography)({
    textAlign: "left",
});