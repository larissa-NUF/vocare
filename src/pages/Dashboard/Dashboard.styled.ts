import { Grid, styled, Typography } from "@material-ui/core";

export const HeaderContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: "#5A6973",
    height: "100vh",
    width: "20vw",
    padding: "10px 0 10px 0"
}));

export const GridColumn = styled(Grid)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "40px"
}));

export const NomeUsuario = styled(Typography)(() => ({
    fontWeight: 700,
    fontSize: "20px",
    color: "white",
    fontFamily: "Poppins",
    marginRight: "30px"
}));

export const Linha = styled("div")(({ theme }) => ({
    width: "100%",
    height: "2px",
    backgroundColor: "#8EB9D4"
}));