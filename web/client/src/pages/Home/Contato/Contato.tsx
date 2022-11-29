import React from "react";
import * as Styled from "./Contato.styled";
import "../estilo.css";
import { Grid } from "@mui/material";
import { theme } from "../../../styles/theme";


export const Contato: React.FC = () => {
    return (
        <>
            <Styled.ContatoContainer>
                {/* Título */}
                <Styled.DivTitulo>
                    <Styled.TituloSobre>
                        Contate-nos
                    </Styled.TituloSobre>
                </Styled.DivTitulo>

                {/* Divisor */}
                <Styled.Divider>
                    <Styled.Simbolo />
                </Styled.Divider>


                <Styled.FormContainer xs={12}>

                    <Grid xs={3} style={{backgroundColor: theme.palette.primary.main, textAlign: "center", display: "flex", flexDirection: "column"}}>
                        <p>Infos</p>
                        <p>Infos</p>
                        <p>Infos</p>
                        <p>Infos</p>
                        <p>Infos</p>
                        <p>Infos</p>
                    </Grid>

                    <Grid xs={9} style={{textAlign: "center"}}>
                        <form></form>
                    </Grid>

                </Styled.FormContainer>

            </Styled.ContatoContainer>
        </>
    )
}