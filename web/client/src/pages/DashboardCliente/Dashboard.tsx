import { Container } from "../../components/Container";
import { Titulo } from "../../components/Titulo";
import { VscGraph } from "react-icons/vsc";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { CardDashboard } from "./CardDashboard";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Tabela } from "../ListarSolicitacoesConsulta/Tabela";
import * as Styled from './Dashboard.styled';
import moment from "moment";
import { useGetConsultasByData, useMinhasConsultas } from "../../api/controllers/consulta";
import { getPerfil, getUser, setHeader } from "../../reducers/authentication";
import { useDispatch, useSelector } from "react-redux";
import { MainButton } from "../../components/MainButton";
import { SecundaryButton } from "../../components/SecundaryButton";
import { useNavigate } from "react-router-dom";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { theme } from "../../styles/theme";
import { Consulta } from "../../api/models/consulta";


export const DashboardCliente: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const user = useSelector(getUser);
    const { data, mutate } = useGetConsultasByData();
    const perfil = useSelector(getPerfil);
    const navigate = useNavigate();
    const { data: minhasConsultas, refetch } = useMinhasConsultas(user.id || 0);

    const dateFormat = (data: Date) => data.toLocaleDateString("pt-BR");

    const handleOpen = (params?: Consulta) => {
        if (params != null)
            navigate('/consulta', { state: { consulta: params, tipo: perfil } });
    };

    const columns: GridColDef[] = [
        {
            field: 'dataConsulta',
            headerClassName: 'super-app-theme--header',
            headerName: 'Data Consulta',
            flex: 0.1,
            renderCell: (params) => dateFormat(new Date(params.row.dataConsulta))
        },
        {
            field: 'aceita',
            headerClassName: 'super-app-theme--header',
            headerName: 'Aceita',
            flex: 0.1,
            renderCell: (params) => {
                if (params.row.aceita) {
                    return <>SIM</>
                } else {
                    return <>NÃO</>
                }
            }
        },
        {
            field: 'id',
            headerClassName: 'super-app-theme--header',
            headerName: 'Ações',
            flex: 0.1,
            renderCell: (params) => {
                if (params.row.aceita) {
                    return <Styled.BtnSala status="entrar" onClick={() => handleOpen(params.row)}>Entrar</Styled.BtnSala>
                } else {
                    return <>Aguardando aceite</>
                }
            }
        }
    ]

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader(true));
        mutate({ id: user.id || 0, date: new Date() });
    }, []);
    return (
        <div>
            <Styled.Container>
                <Styled.Fundo></Styled.Fundo>
                <Styled.TabelaContainer>
                    <Styled.Titulo><Styled.Icon />Dashboard</Styled.Titulo>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <CardDashboard style={{ height: "20em" }} titulo="Testes Projetivos">
                                <Typography style={{ marginBottom: '4em' }}>Ainda não fez o TPO? Veja os testes disponíveis para você hoje!</Typography>

                                <SecundaryButton onClick={() => navigate("/teste-projetivos")} >Ver os testes</SecundaryButton>
                            </CardDashboard>
                            <br />
                            <br />
                            <CardDashboard titulo="Agendamentos" style={{ marginTop: '3em' }}>
                                {!data ? <Typography>Não há chamadas hoje</Typography> :
                                    <div>
                                        <Typography style={{ marginBottom: '1.5em' }}>Hoje há {data.length} chamadas marcada{data.length == 1 ? "" : "s"}</Typography>
                                        <SecundaryButton onClick={() => navigate("/minhas-consultas")} >Ver agendamentos</SecundaryButton>
                                    </div>}

                            </CardDashboard>
                        </Grid>
                        <Grid item xs={7}>
                            <CardDashboard titulo="Solicitações de chamada">
                                <Styled.Tabela>
                                    <Box sx={{
                                        height: 500,
                                        width: '100%',
                                        '& .super-app-theme--header': {
                                            backgroundColor: theme.palette.primary.main,
                                            color: "#FFF",
                                            fontWeight: "bold",
                                        },
                                    }}>
                                        {minhasConsultas &&
                                            <DataGrid
                                                rows={minhasConsultas}
                                                columns={columns}
                                                pageSize={5}
                                                rowsPerPageOptions={[5]}
                                                disableSelectionOnClick
                                                experimentalFeatures={{ newEditingApi: true }}
                                            />}

                                    </Box>
                                </Styled.Tabela>

                            </CardDashboard>

                        </Grid>
                    </Grid>
                </Styled.TabelaContainer>
            </Styled.Container>
        </div>
    )
}