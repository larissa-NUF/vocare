import { Grid } from "@material-ui/core";
import logoBranco from "./../../assets/img/logo-branco.png";
import * as Styled from "./Dashboard.styled";
import { RiPencilFill } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";

export const Dashboard: React.FC = () => {
    return (
        <>
            <Styled.HeaderContainer>
                <Grid container>
                    <Styled.GridColumn xs={12}>
                        <img width="120px" src={logoBranco} alt="" />
                    </Styled.GridColumn>
                    <Styled.GridColumn xs={12}>
                        <Styled.NomeUsuario>Larissa Nunes</Styled.NomeUsuario>
                        <RiPencilFill color="white" fontSize="22px" cursor="pointer" />
                    </Styled.GridColumn>
                </Grid>
                <Styled.Linha />
                <Grid container>
                    <Grid>
                        <SiGoogleanalytics color="white" fontSize="20px" />
                    </Grid>
                </Grid>
            </Styled.HeaderContainer>
        </>
    )
}