import React from 'react';
import { Grid } from '@mui/material';
import * as Styled from "./Sobre.styled";
import '../estilo.css';
import SobreImg from '../../../assets/img/pessoas-2.png';
import { MdCircle } from 'react-icons/md';
import { theme } from '../../../styles/theme';

export const Sobre: React.FC = () => {
    return (
        <>
            <Styled.ContainerSobre>

                {/* Título */}
                <Styled.DivTitulo>
                    <Styled.TituloSobre>
                        Sobre Nós
                    </Styled.TituloSobre>
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
                    <Grid xs={6} style={{ alignItems: "start", display: "block"}}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: theme.spacing(0.5) }}>
                            <MdCircle size={12} fill={theme.palette.primary.main} />
                            <Styled.ConteudoSobre>
                                Quem Somos?
                            </Styled.ConteudoSobre>
                        </div>

                        <div style={{padding: "4px 0 16px 24px"}}>
                            <p style={{ fontSize: theme.spacing(1) }}>
                                A <span style={{color: theme.palette.primary.main, fontWeight: "bold"}}>Vocare</span> é uma plataforma de <span style={{color: theme.palette.primary.main, fontWeight: "bold"}}>orientação vocacional</span> voltada tanto para aqueles que estão indecisos sobre o que seguir de carreira, quanto para outros que estão insatisfeitos com seus empregos e procuram um <span style={{color: theme.palette.primary.main, fontWeight: "bold"}}>direcionamento profissional</span>.
                            </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: theme.spacing(0.5) }}>
                            <MdCircle size={12} fill={theme.palette.primary.main} />
                            <Styled.ConteudoSobre>
                                Nossa Missão
                            </Styled.ConteudoSobre>
                        </div>

                        <div style={{padding: "4px 0 0 24px"}}>
                            <p style={{ fontSize: theme.spacing(1) }}>
                                Ao disponibilizarmos nossa plataforma, esperamos que <span style={{color: theme.palette.primary.main, fontWeight: "bold"}}>todos</span>, incertos ou não sobre sua profissão futura, possam passar a se <span style={{color: theme.palette.primary.main, fontWeight: "bold"}}>conhecer melhor</span> e a confiar em suas <span style={{color: theme.palette.primary.main, fontWeight: "bold"}}>vocações</span>, além de ficarem alerta sobre as áreas em ascensão no mercado.
                            </p>
                        </div>
                    </Grid>
                </Styled.BgSobre>
            </Styled.ContainerSobre>
        </>
    )
}