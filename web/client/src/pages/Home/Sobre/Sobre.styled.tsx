import { Grid, styled } from "@material-ui/core";
import { theme } from "../../../styles/theme";


export const ContainerSobre = styled(Grid)({
    display: "flex", 
    maxWidth: "78%", 
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto"
});

export const TituloSobre = styled("h2")({
    fontSize: theme.spacing(2),
    textAlign: "center",
});

export const Divider = styled("div")({
    background: "rgb(54, 54, 54)",
    height: "4px",
    borderRadius: "4px",
    maxWidth: "15%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1)
});

export const Simbolo = styled("div")({
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "10px",
    backgroundColor: theme.palette.primary.main,
    width: "10%",
    borderRadius: "4px",
});