import React from "react";
import * as Styled from "./Contato.styled";
import "../estilo.css";
import { Grid, Input, TextField, Typography } from "@mui/material";
import { theme } from "../../../styles/theme";
import BasicCard from "../../../components/basicCard";


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


                <Styled.FormContainer xs={12} container>

                    <Grid xs={4} style={{backgroundColor: theme.palette.primary.main, textAlign: "center", display: "flex", flexDirection: "column"}}>
                        
                    </Grid>

                    <Grid xs={8} style={{justifyContent: "center"}}>
                        <div style={{ width: "100%", height: "100%" }}>
                            <form>
                                <div style={{ padding: theme.spacing(2) }}>
                                    <Grid container style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingBottom: theme.spacing(1.5) }}>
                                        <Grid xs={6}>
                                            <TextField 
                                                type="text" 
                                                variant="outlined" 
                                                size="small"
                                                style={{width: "100%"}}
                                                label="Nome:"
                                            />
                                        </Grid>
                                        <Grid xs={6}>
                                            <TextField 
                                                type="email" 
                                                variant="outlined" 
                                                size="small"
                                                style={{width: "100%"}}
                                                label="Email:"
                                            />
                                        </Grid>
                                    </Grid>

                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <TextField 
                                            type="text" 
                                            variant="outlined" 
                                            size="small"
                                            label="Assunto:"
                                        />
                                        <TextField 
                                            type="text" 
                                            variant="outlined" 
                                            size="small"
                                            label="Mensagem:"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Grid>

                </Styled.FormContainer>

            </Styled.ContatoContainer>
        </>
    )
}