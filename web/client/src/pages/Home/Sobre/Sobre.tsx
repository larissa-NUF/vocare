import { Grid } from '@material-ui/core';
import React from 'react';
import * as Styled from "./Sobre.styled";
import '../estilo.css';
import Logo from '../../../assets/img/logo-branco.png';
import SobreImg from '../../../assets/img/pessoas-2.png';
import { MdCircle } from 'react-icons/md';
import { theme } from '../../../styles/theme';
import { MainButton } from '../../../components/MainButton';

export const Sobre: React.FC = () => {
    return (
        <>
            <Styled.ContainerSobre>

                {/* Título */}
                <Styled.DivTitulo>
                    <Styled.TituloSobre>
                        Sobre Nós
                    </Styled.TituloSobre>
                    {/* <MdCircle fill='#469ED6' style={{display: "flex"}} /> */}
                </Styled.DivTitulo>

                {/* Divisor */}
                <Styled.Divider>
                    <Styled.Simbolo />
                </Styled.Divider>

                {/* Conteúdo */}
                <Styled.BgSobre>
                    {/* Imagem */}
                    <Grid xs={6} style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                        <div style={{ height: "auto", alignItems: 'center', display: "flex" }}>
                            <img src={SobreImg} 
                                alt="Time de Pessoas trabalhando juntas" 
                                style={{ width: "450px", marginLeft: "auto", marginRight: 'auto', display: "flex" }} 
                                className="imagem-sobre" 
                            />
                        </div>
                    </Grid>

                    {/* Texto */}
                    <Grid xs={6} style={{ padding: "0 0 0 32px", alignItems: "start", display: "block"}}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: theme.spacing(1) }}>
                            <MdCircle fill={theme.palette.primary.main} />
                            <Styled.ConteudoSobre>
                                Quem Somos?
                            </Styled.ConteudoSobre>
                        </div>

                        <p style={{marginBottom: theme.spacing(1.5)}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: theme.spacing(1) }}>
                            <MdCircle fill={theme.palette.primary.main} />
                            <Styled.ConteudoSobre>
                                Nossa Missão
                            </Styled.ConteudoSobre>
                        </div>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Grid>
                </Styled.BgSobre>
            </Styled.ContainerSobre>
        </>
    )
}