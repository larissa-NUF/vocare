import React from "react";
import * as Styled from "./Contato.styled";
import "../estilo.css";
import { Grid, Input, TextField, Typography } from "@mui/material";
import { theme } from "../../../styles/theme";
import BasicCard from "../../../components/basicCard";
import { MainButton } from "../../../components/MainButton";
import { GoLocation } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";


export const Contato: React.FC = () => {
    return (
        <div style={{position: "relative"}}>
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

                    <Grid xs={4} style={{background: 'linear-gradient(to right, #071844, #37689B)', borderRadius: "8px 0 0 8px", display: "flex", flexDirection: "column" }}>
                        <Grid xs={12} container style={{ display: "flex", flexDirection: "column", padding: theme.spacing(1), justifyContent: "center", alignItems: "center" }}>
                            
                            <Styled.CardInfos container style={{marginBottom: theme.spacing(1)}} className="card">
                                <Grid xs={3} style={{justifyContent: "center", display: "flex"}}>
                                    <Styled.DivIcon className="div-icon">
                                        <GoLocation fill="#fff" size={24} className="icon" style={{transition: ".3s ease-in"}} />
                                    </Styled.DivIcon>
                                </Grid>
                                <Grid xs={9}>
                                    <h4 style={{color: "#fff", fontSize: theme.spacing(1.25)}}>Localização</h4>
                                    <h6 style={{color: "#fff", fontSize: theme.spacing(0.85), lineHeight: "20px", fontWeight: 200}}>R. Bélgica, 88 - Jardim Alvorada, Ribeirão Pires</h6>
                                </Grid>
                            </Styled.CardInfos>

                            <Styled.CardInfos container style={{marginBottom: theme.spacing(1)}} className="card">
                                <Grid xs={3} style={{justifyContent: "center", display: "flex"}}>
                                    <Styled.DivIcon className="div-icon">
                                        <MdOutlineMailOutline fill="#fff" size={24} className="icon" style={{transition: ".3s ease-in"}} />
                                    </Styled.DivIcon>
                                </Grid>
                                <Grid xs={9}>
                                    <h4 style={{color: "#fff", fontSize: theme.spacing(1.25)}}>Email</h4>
                                    <h6 style={{color: "#fff", fontSize: theme.spacing(0.85), lineHeight: "20px", fontWeight: 200}}>vocarecontato@gmail.com</h6>
                                </Grid>
                            </Styled.CardInfos>

                            <Styled.CardInfos container style={{marginBottom: theme.spacing(1)}} className="card">
                                <Grid xs={3} style={{justifyContent: "center", display: "flex"}}>
                                    <Styled.DivIcon className="div-icon">
                                        <BsTelephone fill="#fff" size={24} className="icon" style={{transition: ".3s ease-in"}} />
                                    </Styled.DivIcon>
                                </Grid>
                                <Grid xs={9}>
                                    <h4 style={{color: "#fff", fontSize: theme.spacing(1.25)}}>Telefone</h4>
                                    <h6 style={{color: "#fff", fontSize: theme.spacing(0.85), lineHeight: "20px", fontWeight: 200}}>(11) 94555-4555</h6>
                                </Grid>
                            </Styled.CardInfos>

                            <Styled.CardInfos container className="card">
                                <Grid xs={3} style={{justifyContent: "center", display: "flex"}}>
                                    <Styled.DivIcon className="div-icon">
                                        <AiOutlineInstagram fill="#fff" size={24} className="icon" style={{transition: ".3s ease-in"}} />
                                    </Styled.DivIcon>
                                </Grid>
                                <Grid xs={9}>
                                    <h4 style={{color: "#fff", fontSize: theme.spacing(1.25)}}>Instagram</h4>
                                    <h6 style={{color: "#fff", fontSize: theme.spacing(0.85), lineHeight: "20px", fontWeight: 200}}>@projetovocare</h6>
                                </Grid>
                            </Styled.CardInfos>
                            
                        </Grid>
                    </Grid>

                    <Grid xs={8} style={{justifyContent: "center", backgroundColor: "#fff", borderRadius: "0 8px 8px 0"}}>
                        <div>
                            <form>
                                <div style={{ padding: theme.spacing(2) }}>
                                    <Grid container style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: theme.spacing(1.5) }}>
                                        <Grid>
                                            <TextField 
                                                type="text" 
                                                variant="outlined" 
                                                size="small"
                                                label="Nome:"
                                            />
                                        </Grid>
                                        <Grid>
                                            <TextField 
                                                type="email" 
                                                variant="outlined" 
                                                size="small"
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
                                            style={{paddingBottom: theme.spacing(1.5)}}
                                        />
                                        <Styled.TextArea 
                                            name="Texto" 
                                            rows={10}
                                            placeholder="Mensagem:"
                                            wrap="soft"
                                        />                                      

                                        <div style={{width: "auto", display: "flex", justifyContent: "center"}}>
                                            <MainButton>Enviar</MainButton>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Grid>

                </Styled.FormContainer>

            </Styled.ContatoContainer>    
        </div>
    )
}