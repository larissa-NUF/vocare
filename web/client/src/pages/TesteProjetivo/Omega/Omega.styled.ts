import { Button, Grid, styled, Typography } from "@mui/material";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";

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
    marginTop: "20px",
    alignItems: "center"
});

export const GridAvaliacao = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

export const DivTexto = styled("div")({
    fontSize: "14px",
    fontWeight: "500",
    textIndent: "10px"
});

export const ButtonStart = styled(Button)({
    width: "fit-content",
    borderRadius: "100px",
    justifyContent: "space-around"
});

export const TextArea = styled("textarea")({
    resize: "none",
    width: "100%",
    height: "250px !important",
    borderColor: "black",
    borderRadius: "15px",
    background: "transparent",
    padding: "15px",
    marginTop: "10px",
    marginBottom: "10px"
});

export const SetaVoltar = styled(AiOutlineArrowLeft)({
    marginLeft: "10px"
});

export const SetaAvancar = styled(AiOutlineArrowRight)({
    marginLeft: "10px"
});

export const Enviar = styled(AiOutlineSend)({
    marginLeft: "10px"
})