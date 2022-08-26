import * as Styled from './SideBar.styled';
import imagem from "./../../assets/img/logo-branco.png";
import { Grid } from '@material-ui/core';
import { SiGoogleanalytics } from "react-icons/si";

export const SideBar: React.FC = () => {
    return (
        <>
            <Styled.SideBar>
                <Grid container>
                    <Grid xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src={imagem} alt="Logo Vocare" width="150px" />
                    </Grid>
                    <Grid container>
                        <Grid xs={12}>
                            <Styled.MenuItem container>
                                <SiGoogleanalytics color="white" />
                                Analise
                            </Styled.MenuItem>
                        </Grid>
                    </Grid>
                </Grid>
            </Styled.SideBar>
        </>
    )
};