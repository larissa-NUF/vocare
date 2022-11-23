import React from "react";
import * as Styled from "./Equipe.styled";
import "../estilo.css";
import { Grid } from "@material-ui/core";
import { theme } from "../../../styles/theme";
import Time1 from "../../../assets/img/resultados.png";

export const Equipe: React.FC = () => {
    const teste = [{
        nome: "Lucas",
        bio: "blalablablabla",
    },
    {
        nome: "Kaio",
        bio: "lashkhjksj"
    }]

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


                <Grid xs={12} style={{ display: "flex", flexDirection: "row", marginBottom: theme.spacing(2), marginLeft: "auto", marginRight: "auto", gap: theme.spacing(2), marginTop: theme.spacing(2) }}>
                    <Styled.CardEquipe xs={4}>
                        {teste.map((item) => 
                            <div>{item.nome}</div>
                        )}
                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4}>
                        
                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4}>
                        
                    </Styled.CardEquipe>
                </Grid>

                <Grid xs={12} style={{ display: "flex", flexDirection: "row", marginBottom: theme.spacing(2), marginLeft: "auto", marginRight: "auto", gap: theme.spacing(2) }}>
                    <Styled.CardEquipe xs={4}>
                        
                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4}>
                        
                    </Styled.CardEquipe>
                    <Styled.CardEquipe xs={4}>
                        
                    </Styled.CardEquipe>
                </Grid>
            </Styled.EquipeContainer>
        </>
    )
}