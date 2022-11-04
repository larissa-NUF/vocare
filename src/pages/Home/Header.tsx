import React from "react";
import * as Styled from "./Header.styled";
import Logo from '../../assets/img/logo.png';
import Fundo from '../../assets/img/doc.png';
import Triangulo from '../../assets/img/divider.png';
import { Button, Grid } from "@material-ui/core";
import { theme } from "../../styles/theme";
import { FaUserAlt as Fa } from "react-icons/fa";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { SecundaryButton } from "../../components/SecundaryButton";
import { useNavigate } from "react-router-dom";
import Typical from 'react-typical';

export const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <Styled.GridContainer>
                {/* Navbar component */}
                <AppBar 
                    component="nav" 
                    style={{ background: 'transparent', boxShadow: 'none', padding: "0 100px 0 100px", justifyContent: "center", position: "relative" }}
                >
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>

                        <Styled.GridNavItens>
                            <Styled.LogoNav src={Logo} alt="Logo Vocare azul" />

                            <Styled.NavItem>Início</Styled.NavItem>
                            <Styled.NavItem>Sobre</Styled.NavItem>
                            <Styled.NavItem>Contato</Styled.NavItem>
                        </Styled.GridNavItens>

                        <Grid style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                            <SecundaryButton>
                                <Styled.NavDireita onClick={() => navigate("/login")}>
                                    <Fa color="white" />
                                    <p style={{ fontSize: "16px", color: "#fff", }}>Login</p>
                                </Styled.NavDireita>
                            </SecundaryButton>
                        </Grid>
                    </Toolbar>
                </AppBar>

                {/* Conteúdo Header */}
                <Styled.GridConteudoHeader>
                    <Grid xs={8} style={{ paddingTop: theme.spacing(6), flexDirection: "column", zIndex: 2 }}>
                        <Styled.TituloHeader>
                            <Typical 
                                loop={1}
                                steps={[
                                    'Descubra sua vocação e decole profissionalmente! 😱',
                                    1000,
                                    'Descubra sua vocação e decole no mercado de trabalho! 😇',
                                    1000,
                                    'Descubra sua vocação e decole sua carreira! 😎',
                                    1000,
                                ]}
                            />
                        </Styled.TituloHeader>

                        <Grid xs={12} style={{width: "70%"}}>
                            <h4 style={{ color: "#fff", fontWeight: "200", marginTop: theme.spacing(1) }}>
                                Por meio da orientação vocacional, obtenha atendimento particular com psicólogos certificados e resultados acessíveis!
                            </h4>
                        </Grid>
                    </Grid>
                    <Grid xs={4} style={{justifyContent:"center", display:"flex", zIndex: 0}}>
                        <Styled.ImgHeader src={Fundo} alt="" />
                    </Grid>
                </Styled.GridConteudoHeader>

            </Styled.GridContainer>
            <img src={Triangulo} style={{ height: "40px", display: "block", marginLeft: "auto", marginRight: "auto", transform: "translateY(-50%)" }} />
        </>
    );
}
