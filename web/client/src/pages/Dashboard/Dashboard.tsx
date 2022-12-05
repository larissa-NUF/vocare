import { Container } from "../../components/Container";
import { Titulo } from "../../components/Titulo";
import { VscGraph } from "react-icons/vsc";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { CardDashboard } from "./CardDashboard";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Tabela } from "../ListarSolicitacoesConsulta/Tabela";
import * as Styled from './Dashboard.styled';
import moment from "moment";
import { useGetConsultasByData } from "../../api/controllers/consulta";
import { getUser } from "../../reducers/authentication";
import { useSelector } from "react-redux";
import { MainButton } from "../../components/MainButton";
import { SecundaryButton } from "../../components/SecundaryButton";
import { useNavigate } from "react-router-dom";


export const Dashboard: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const user = useSelector(getUser);
    const {data, mutate} = useGetConsultasByData();
    const navigate = useNavigate();
    const mark = [
        '04-03-2020',
        '03-03-2020',
        '05-03-2020'
    ]

    useEffect(() => {
        mutate ({id: user.id || 0, date: new Date()});
      }, []);
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
                            <CardDashboard titulo="Agendamentos" style={{marginTop: '3em'}}>
                            {!data ? <Typography>Não há chamadas hoje</Typography> : 
                                <div>
                                    <Typography style={{marginBottom: '1.5em'}}>Hoje há {data.length} chamadas marcada{data.length == 1 ? "" : "s"}</Typography>
                                    <SecundaryButton >Ver agendamentos</SecundaryButton>
                                </div>}

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