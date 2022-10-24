import * as React from 'react';
import * as Styled from "./Faculdades.styled"
import { theme } from '../../styles/theme';
import { Grid } from '@mui/material';
import { FaUserGraduate as Fa } from 'react-icons/fa';
import { useGetAll } from '../../api/controllers/usuario';
import { Card } from '@mui/material';
import Logo from "../../assets/img/logo-branco.png";

export const Faculdades: React.FC = () => {
    const { data } = useGetAll();
    return (
        <div>
            <Styled.Fundo></Styled.Fundo>
            <Styled.Container>
                <Styled.Titulo><Styled.Icon />Faculdades</Styled.Titulo>
                <Styled.GridFaculdades xs={12}>
                    <Styled.Conteudo xs={8}>
                            <div>
                                <div style={{ height: "105px", width: "105px", backgroundColor: "#D9D9D9", border: "1px solid #ededed" }}></div>
                            </div>
                            <div>
                                <Styled.Legenda>Uniasselvi</Styled.Legenda>
                                <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "21px" }}>Nota iMEC: 3.1</p>
                                <p style={{ fontSize: "14px", lineHeight: "21px", marginTop: "22px" }}>R. Platina, 556 - Tatuape, São Paulo - SP, 03308-010</p>
                            </div>
                    </Styled.Conteudo>
                    <Grid xs={4}>
                        <Card style={{ backgroundColor: "#FFF", alignItems: "center", display: "flex", padding: "30px" }}>
                            <div style={{ height: "224px", width: "224px", backgroundColor: "#D9D9D9", border: "1px solid #ededed", marginLeft: "auto", marginRight:"auto" }}></div>
                        </Card>
                    </Grid>
                </Styled.GridFaculdades>
                
            </Styled.Container>
        </div>
    )
}