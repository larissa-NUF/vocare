import React from "react";
import * as Styled from "./Equipe.styled";
import "../estilo.css";
import { Grid } from "@mui/material";
import { theme } from "../../../styles/theme";
import Time1 from "../../../assets/img/resultados.png";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

export const Equipe: React.FC = () => {
    return (
        <>
            <Styled.EquipeContainer>
                {/* Título */}
                <Styled.DivTitulo>
                    <Styled.TituloSobre>
                        Nossa Equipe
                    </Styled.TituloSobre>
                </Styled.DivTitulo>

                {/* Divisor */}
                <Styled.Divider>
                    <Styled.Simbolo />
                </Styled.Divider>

                {/* Conteúdo */}
                <Styled.GridCards xs={12}>
                    <Styled.CardEquipe xs={4}>

                        <div style={{padding: "0", margin: "0", overflow: "hidden",}}>
                            <img src={Time1} style={{height: "250px"}} alt="" />
                        </div>
                        
                        <div style={{ padding: "30px 15px", textAlign: "center",margin: "-50px 20px 0 20px", position: "relative",borderRadius: "8px", background: "#fff" }}>
                            <Styled.Social>
                                <Styled.LinkContato href="https://github.com/lucas-alves1" target="_blank">
                                    <i>
                                        <AiFillGithub fill="#fff" style={{fontSize: theme.spacing(1)}} />
                                    </i>
                                </Styled.LinkContato>
                                <Styled.LinkContato href="https://github.com/lucas-alves1" target="_blank">
                                    <i>
                                        <AiOutlineLinkedin fill="#fff" style={{fontSize: theme.spacing(1)}} />
                                    </i>
                                </Styled.LinkContato>
                            </Styled.Social>
                            <h4 style={{fontWeight: 400, marginBottom: "5px", fontSize: "24px" }}>
                                Lucas Alves
                            </h4>
                            <span style={{ display: "block", fontSize: "16px",fontWeight: 400, color: "#2b2b2b71" }}>
                                lucas.lago.cont@gmail.com
                            </span>
                        </div>


                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4}>
                        
                        <div style={{padding: "0", margin: "0"}}>
                            <img src={Time1} style={{height: "250px"}} alt="" />
                        </div>
                        
                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4}>
                        
                        <div style={{padding: "0", margin: "0"}}>
                            <img src={Time1} style={{height: "250px"}} alt="" />
                        </div>
                        
                    </Styled.CardEquipe>
                </Styled.GridCards>

                <Styled.GridCards>
                    <Styled.CardEquipe xs={4}>
                        
                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4}>
                        
                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4}>
                        
                    </Styled.CardEquipe>
                </Styled.GridCards>
            </Styled.EquipeContainer>
        </>
    )
}