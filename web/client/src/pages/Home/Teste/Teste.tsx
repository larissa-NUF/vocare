import React from "react";
import * as Styled from "./Teste.styled";
import Fundo from "../../../assets/img/bg-sobre.jpg";
import { Grid } from "@material-ui/core";
import '../estilo.css';
import { theme } from "../../../styles/theme";
import { SecundaryButton } from "../../../components/SecundaryButton";
import { RiHome3Line } from "react-icons/ri";


export const Teste: React.FC = () => {
    return(
        <>
            <Styled.ContainerTeste>
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
        </>
    )
}