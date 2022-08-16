import { Grid, ThemeProvider, Typography } from "@material-ui/core";
import logoBranco from "./../../assets/img/logo-branco.png";
import * as Styled from "./Dashboard.styled";
import { RiPencilFill } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
import { theme } from "../../styles/theme";

export const Dashboard: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Styled.HeaderContainer>
                    <Grid container>
                        <Styled.GridColumn item xs={12}>
                            <img width="120px" src={logoBranco} alt="" />
                        </Styled.GridColumn>
                        <Styled.GridColumn item xs={12}>
                            <Styled.NomeUsuario>Larissa Nunes</Styled.NomeUsuario>
                            <RiPencilFill color="white" fontSize="22px" cursor="pointer" />
                        </Styled.GridColumn>
                    </Grid>
                    <Styled.Linha />
                    <Grid container style={{ padding: "0 10px 0 10px" }}>
                        <Styled.GridActionsColumn item xs={12}>
                            <Styled.Action item xs={6}>
                                <SiGoogleanalytics color="white" fontSize="20px" />
                                <Typography>Análine</Typography>
                            </Styled.Action>
                        </Styled.GridActionsColumn>
                    </Grid>
                </Styled.HeaderContainer>
            </ThemeProvider>
        </>
    )
}