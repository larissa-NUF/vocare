import React from "react";
import * as Styled from "./Header.styled";
import "../estilo.css";
import Logo from '../../../assets/img/logo.png';
import Fundo from '../../../assets/img/resultados.png';
import Triangulo from '../../../assets/img/divider.png';
import { Grid } from "@mui/material";
import { theme } from "../../../styles/theme";
import { FaUserAlt as Fa } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { BsClipboardData, BsPersonBadge } from "react-icons/bs";
import { MdOutlinePsychology as Md } from "react-icons/md";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { SecundaryButton } from "../../../components/SecundaryButton";
import { Link, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

export const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <Styled.GridContainer>
                {/* Navbar */}
                <AppBar 
                    component="nav" 
                    style={{ background: 'transparent', boxShadow: 'none', padding: "0 100px 0 100px", justifyContent: "center", position: "relative", paddingTop: theme.spacing(0.5) }}
                >
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>

                        <Styled.GridNavItens>
                            <div style={{marginRight: theme.spacing(0.5)}}>
                                <Styled.LogoNav src={Logo} alt="Logo Vocare azul" onClick={() => navigate("/")} />
                            </div>

                            <Styled.NavItem>Início</Styled.NavItem>
                            <Styled.NavItem>Sobre</Styled.NavItem>
                            <Styled.NavItem>Equipe</Styled.NavItem>
                            <Styled.NavItem>Contato</Styled.NavItem>
                        </Styled.GridNavItens>

                        <Grid style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                            <Link to="/login">
                                <SecundaryButton>
                                    <Styled.NavDireita>
                                        <Fa color="white" />
                                        <p style={{ fontSize: "16px", color: "#fff", }}>Login</p>
                                    </Styled.NavDireita>
                                </SecundaryButton>
                            </Link>
                        </Grid>
                    </Toolbar>
                </AppBar>

            {/* Header */}
                <Styled.ConteudoHeader>
                    <Grid xs={7} style={{ paddingTop: theme.spacing(6), flexDirection: "column", zIndex: 2 }} className="titulo">
                        <Styled.TituloHeader>
                            <Typewriter options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: [
                                    'Descubra sua vocação e decole profissionalmente!😇',
                                    'Descubra sua vocação e decole sua carreira! 😎',
                                ]
                            }}/>
                          
                        </Styled.TituloHeader>

                        <Grid style={{width: "80%", display: "block", gap: theme.spacing(0.5)}} className="subtitulo">
                            <h3 style={{ color: "#fff", fontWeight: "200", marginTop: theme.spacing(1.5) }}>
                                Tem dúvida sobre sua carreira profissional ou não sabe qual área seguir? Conheça-nos!
                            </h3>
                            <h3 style={{ color: "#fff", fontWeight: "200", marginTop: theme.spacing(1) }}>
                                Por meio da orientação vocacional, obtenha atendimento particular com psicólogos certificados e resultados acessíveis!
                            </h3>
                        </Grid>
                    </Grid>
                    <Grid xs={5} style={{justifyContent:"center", display:"flex", zIndex: 0}}>
                        <Styled.ImgHeader src={Fundo} alt="psicóloga de exemplo" className="imagem-header" />
                    </Grid>
                </Styled.ConteudoHeader>

            </Styled.GridContainer>
            <img src={Triangulo} style={{ height: "40px", display: "block", marginLeft: "auto", marginRight: "auto", padding: "0", transform: "translateY(-50%)" }} />


            {/* Brands */}
            <Styled.Brands xs={12}>
                <Styled.BrandItem xs={3} className="item">

                    <MdOutlineComputer color={theme.palette.primary.main} size={theme.spacing(2.5)} style={{marginBottom: theme.spacing(0.75)}} />

                    <h3 style={{ fontSize: theme.spacing(1.25), fontWeight: "bold", cursor: "default" }}>Consulta com Psicólogos</h3>

                </Styled.BrandItem>
                <Styled.BrandItem xs={3} className="item">

                    <BsPersonBadge color={theme.palette.primary.main} size={theme.spacing(2.5)} style={{marginBottom: theme.spacing(0.75)}} />

                    <h3 style={{ fontSize: theme.spacing(1.25), fontWeight: "bold", cursor: "default" }}>Chamadas de Vídeo</h3>

                </Styled.BrandItem>
                <Styled.BrandItem xs={3} className="item">

                    <Md color={theme.palette.primary.main} size={theme.spacing(2.5)} style={{marginBottom: theme.spacing(0.75)}} />

                    <h3 style={{ fontSize: theme.spacing(1.25), fontWeight: "bold", cursor: "default" }}>Orientação Vocacional</h3>

                </Styled.BrandItem>
                <Styled.BrandItem xs={3} className="item">

                    <BsClipboardData color={theme.palette.primary.main} size={theme.spacing(2.5)} style={{marginBottom: theme.spacing(0.75)}} />

                    <h3 style={{ fontSize: theme.spacing(1.25), fontWeight: "bold", cursor: "default" }}>Resultados Acessíveis</h3>

                </Styled.BrandItem>
            </Styled.Brands>
        </>
    );
}
