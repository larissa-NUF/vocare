import { Button, Grid, styled, Typography } from "@mui/material";

export const ContainerDiv = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex",
    paddingTop: "50px",
    alignItems: "baseline",
    justifyContent: "center"
});

export const GridTitle = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "left"
});

export const Title = styled(Typography)({
    fontSize: "32px",
    fontWeight: "500"
});

export const GridTeste = styled(Grid)({
    background: "white",
    padding: "20px"
});

export const TitleTeste = styled(Typography)({
    fontSize: "26px",
    color: "#37689B"
});

export const GridDescricao = styled(Grid)({
    display: "flex",
    marginTop: "20px"
});

export const GridAvaliacao = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "250px"
});

export const DivTexto = styled("div")({
    fontSize: "14px",
    fontWeight: "500",
    textIndent: "10px"
});

export const ButtonStart = styled(Button)({
    width: "200px",
    borderRadius: "100px",
    justifyContent: "space-around"
});