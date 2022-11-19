import { Grid } from '@material-ui/core';
import React from 'react';
import * as Styled from "./Sobre.styled";
import '../estilo.css';
import Logo from '../../../assets/img/logo-branco.png';
import { MdCircle } from 'react-icons/md';
import { theme } from '../../../styles/theme';
import { MainButton } from '../../../components/MainButton';

export const Sobre: React.FC = () => {
    return (
        <>
            <Styled.Divider>
                <Styled.Simbolo />
            </Styled.Divider>
            <Styled.ContainerSobre>
                <div style={{ gap: "8px",  display: "flex", alignItems: "center", flexDirection: "row" }}>
                    <MdCircle fill='#469ED6' /><Styled.TituloSobre>SOBRE</Styled.TituloSobre>
                </div>

                <Grid style={{ borderRadius: "10px", backgroundColor: "#eceeef", padding: "48px 32px 48px 32px", marginTop: theme.spacing(2), display: "flex", flexDirection: "row" }}>
                    <Grid xs={4}>
                        <div style={{ height: "400px", backgroundColor: "#37689B", borderRadius: "10px", alignItems: 'center', display: "flex" }}>
                            <img src={Logo} alt="Logo branco Vocare" style={{ width: "300px", marginLeft: "auto", marginRight: 'auto', display: "flex" }} />
                        </div>
                    </Grid>
                    <Grid xs={8} style={{ padding: "0 0 0 32px", justifyContent: "center", alignItems: "start", display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: theme.spacing(2), fontWeight: "200" }}>Quem Somos?</span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <br />
                        <span style={{ fontSize: theme.spacing(2), fontWeight: "200" }}>Nossa Missão</span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Grid>
                </Grid>
            </Styled.ContainerSobre>
        </>
    )
}