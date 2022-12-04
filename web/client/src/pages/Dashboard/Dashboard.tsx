import { Container } from "../../components/Container";
import { Titulo } from "../../components/Titulo";
import { VscGraph } from "react-icons/vsc";
import { Grid } from "@mui/material";
import React, { useState } from 'react';
import { CardDashboard } from "./CardDashboard";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Tabela } from "../ListarSolicitacoesConsulta/Tabela";
import * as Styled from './Dashboard.styled';
import moment from "moment";


export const Dashboard: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const mark = [
        '04-03-2020',
        '03-03-2020',
        '05-03-2020'
    ]
    return (
        <div>
            <Styled.Container>
                <Styled.Fundo></Styled.Fundo>
                <Styled.TabelaContainer>
                    <Styled.Titulo><Styled.Icon />Dashboard</Styled.Titulo>
                    <Grid container spacing={3}>
                        <Grid item>
                            <CardDashboard titulo="Chamadas">

                                <Calendar 
                                onChange={setDate} 
                                value={date} 
                              />

                            </CardDashboard>
                        </Grid>
                        <Grid item>
                            <CardDashboard titulo="Solicitações de chamada">
                                <Styled.Tabela>
                                    <Tabela />
                                </Styled.Tabela>

                            </CardDashboard>

                        </Grid>
                    </Grid>
                </Styled.TabelaContainer>
            </Styled.Container>
        </div>
    )
}