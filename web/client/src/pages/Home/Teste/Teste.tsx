import React from "react";
import * as Styled from "./Teste.styled";
import '../estilo.css';
import Triangulo from '../../../assets/img/divider.png';
import { theme } from "../../../styles/theme";
import { SecundaryButton } from "../../../components/SecundaryButton";


export const Teste: React.FC = () => {
    return(
        <>
            <Styled.ContainerTeste>
                <img src={Triangulo} style={{ height: "40px", display: "block", marginLeft: "auto", marginRight: "auto", padding: "0", transform: "translateY(-50%) rotate(180deg)", position: "relative" }} />
                {/* Título */}
                <Styled.TituloTeste>
                    Orientação Vocacional
                </Styled.TituloTeste>

                {/* Divisor */}
                <Styled.Divider>
                    <Styled.Simbolo />
                </Styled.Divider>

                {/* Conteúdo */}
                <Styled.ConteudoTeste style={{}}>
                    <div>
                        <h3 style={{color: "#fff", fontWeight: "normal"}}>
                            Conheça o nosso modelo de orientação vocacional, o <span style={{color: theme.palette.primary.main, fontWeight: "bold"}}>Teste Projetivo Ômega</span>, desenvolvido por profissionais brasileiros!
                        </h3>

                        <div style={{ marginTop: theme.spacing(3) }}>
                            <SecundaryButton>
                                <p style={{fontSize: theme.spacing(1), padding: "0 12px 0 12px", fontFamily: "Poppins"}}>
                                    Realize o teste já!
                                </p>
                            </SecundaryButton>
                        </div>
                    </div>
                </Styled.ConteudoTeste>

            </Styled.ContainerTeste>
            <img src={Triangulo} style={{ height: "40px", display: "block", marginLeft: "auto", marginRight: "auto", padding: "0", transform: "translateY(-50%)" }} />
        </>
    )
}