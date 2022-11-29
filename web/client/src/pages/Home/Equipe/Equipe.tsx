import React from "react";
import * as Styled from "./Equipe.styled";
import "../estilo.css";
import { Grid } from "@mui/material";
import { theme } from "../../../styles/theme";
import Larissa from "../../../assets/img/larissa.jpg";
import Kevyn from "../../../assets/img/kevyn.jpg";
import Mateus from "../../../assets/img/mateus.jpg";
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
                <Styled.GridCards xs={12} className="team">
                    <Styled.CardEquipe xs={4} className="team-member">

                        <div style={{ overflow: "hidden", borderRadius: "8px", alignItems: "center", display: "flex" }}>
                            <Styled.ImgTime src={Larissa} alt="" />
                        </div>

                        <Styled.Info>
                            <Styled.Social className="social">
                                <Styled.LinkContato href="https://github.com/lucas-alves1" target="_blank">
                                    <AiFillGithub fill="#fff" size={25} />
                                </Styled.LinkContato>
                                <Styled.LinkContato href="https://github.com/lucas-alves1" target="_blank">
                                    <AiOutlineLinkedin fill="#fff" size={25} />
                                </Styled.LinkContato>
                            </Styled.Social>
                            <h4 style={{ fontWeight: 600, marginBottom: "5px", fontSize: "24px" }}>
                                Lucas Alves
                            </h4>
                            <span style={{ display: "block", fontSize: "16px", fontWeight: 400, color: "#2b2b2b8e" }}>
                                Lucas-Alves1
                            </span>
                        </Styled.Info>

                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4} className="team-member">

                        <div style={{ overflow: "hidden", borderRadius: "8px", alignItems: "center", display: "flex" }}>
                            <Styled.ImgTime src={Larissa} alt="" />
                        </div>

                        <Styled.Info>
                            <Styled.Social className="social">
                                <Styled.LinkContato href="https://github.com/larissa-NUF" target="_blank">
                                    <AiFillGithub fill="#fff" size={25} />
                                </Styled.LinkContato>
                                <Styled.LinkContato href="https://github.com/lucas-alves1" target="_blank">
                                    <AiOutlineLinkedin fill="#fff" size={25} />
                                </Styled.LinkContato>
                            </Styled.Social>
                            <h4 style={{ fontWeight: 600, marginBottom: "5px", fontSize: "24px" }}>
                                Larissa Nunes
                            </h4>
                            <span style={{ display: "block", fontSize: "16px", fontWeight: 400, color: "#2b2b2b8e" }}>
                                larissa-NUF
                            </span>
                        </Styled.Info>

                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4} className="team-member">

                        <div style={{ overflow: "hidden", borderRadius: "8px", alignItems: "center", display: "flex" }}>
                            <Styled.ImgTime src={Mateus} alt="" />
                        </div>

                        <Styled.Info>
                            <Styled.Social className="social">
                                <Styled.LinkContato href="https://github.com/math2359" target="_blank">
                                    <AiFillGithub fill="#fff" size={25} />
                                </Styled.LinkContato>
                                <Styled.LinkContato href="https://github.com/lucas-alves1" target="_blank">
                                    <AiOutlineLinkedin fill="#fff" size={25} />
                                </Styled.LinkContato>
                            </Styled.Social>
                            <h4 style={{ fontWeight: 600, marginBottom: "5px", fontSize: "24px" }}>
                                Mateus Moretti
                            </h4>
                            <span style={{ display: "block", fontSize: "16px", fontWeight: 400, color: "#2b2b2b8e" }}>
                                math2359
                            </span>
                        </Styled.Info>

                    </Styled.CardEquipe>
                </Styled.GridCards>

                <Styled.GridCards className="team">
                    <Styled.CardEquipe xs={4} className="team-member">

                        <div style={{ overflow: "hidden", borderRadius: "8px", alignItems: "center", display: "flex" }}>
                            <Styled.ImgTime src={Kevyn} alt="" />
                        </div>

                        <Styled.Info>
                            <Styled.Social className="social">
                                <Styled.LinkContato href="https://github.com/KevynGuima" target="_blank">
                                    <AiFillGithub fill="#fff" size={25} />
                                </Styled.LinkContato>
                                <Styled.LinkContato href="https://github.com/lucas-alves1" target="_blank">
                                    <AiOutlineLinkedin fill="#fff" size={25} />
                                </Styled.LinkContato>
                            </Styled.Social>
                            <h4 style={{ fontWeight: 600, marginBottom: "5px", fontSize: "24px" }}>
                                Kevyn Guimarães
                            </h4>
                            <span style={{ display: "block", fontSize: "16px", fontWeight: 400, color: "#2b2b2b8e" }}>
                                KevynGuima
                            </span>
                        </Styled.Info>

                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4} className="team-member">

                        <div style={{ overflow: "hidden", borderRadius: "8px", alignItems: "center", display: "flex" }}>
                            <Styled.ImgTime src={Larissa} alt="" />
                        </div>

                        <Styled.Info>
                            <Styled.Social className="social">
                                <Styled.LinkContato href="https://github.com/KaioMesquita1" target="_blank">
                                    <AiFillGithub fill="#fff" size={25} />
                                </Styled.LinkContato>
                                <Styled.LinkContato href="https://github.com/lucas-alves1" target="_blank">
                                    <AiOutlineLinkedin fill="#fff" size={25} />
                                </Styled.LinkContato>
                            </Styled.Social>
                            <h4 style={{ fontWeight: 600, marginBottom: "5px", fontSize: "24px" }}>
                                Kaio Mesquita
                            </h4>
                            <span style={{ display: "block", fontSize: "16px", fontWeight: 400, color: "#2b2b2b8e" }}>
                                KaioMesquita1
                            </span>
                        </Styled.Info>

                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4} className="team-member">

                        <div style={{ overflow: "hidden", borderRadius: "8px", alignItems: "center", display: "flex" }}>
                            <Styled.ImgTime src={Larissa} alt="" />
                        </div>

                        <Styled.Info>
                            <Styled.Social className="social">
                                <Styled.LinkContato href="https://www.linkedin.com/in/leandro-reginaldo-0760449a?external_page=LPC.Immersive&external_control=ViewProfileLink&external_app_instance=953dc4bb-1185-4242-86ee-2ee8190ad5f9&external_page_instance=d595401d-8933-4610-a0b2-281226afbdaa&experiment=displayLinkedInDataPrebind" target="_blank">
                                    <AiOutlineLinkedin fill="#fff" size={25} />
                                </Styled.LinkContato>
                            </Styled.Social>
                            <h4 style={{ fontWeight: 600, marginBottom: "5px", fontSize: "24px" }}>
                                Leandro Reginaldo
                            </h4>
                            <span style={{ display: "block", fontSize: "16px", fontWeight: 400, color: "#2b2b2b8e" }}>
                                Professor Orientador do TCC
                            </span>
                        </Styled.Info>

                    </Styled.CardEquipe>
                </Styled.GridCards>
            </Styled.EquipeContainer>
        </>
    )
}