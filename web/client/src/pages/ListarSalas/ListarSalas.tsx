import * as React from 'react';
import Box from '@mui/material/Box';
import * as Styled from "./ListarSalas.styled"
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { theme } from '../../styles/theme';
import { useGetAll } from '../../api/controllers/usuario';
import { ModalEntrarSala } from '../../components/ModalEntrarSala';
import { Usuario } from '../../api/models/usuario';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPerfil, getUser, setHeader } from '../../reducers/authentication';
import { BiSearchAlt } from 'react-icons/bi';
import { useGetConsultasByPsicologo } from '../../api/controllers/consulta';
import { Consulta } from '../../api/models/consulta';
import { useNavigate } from 'react-router-dom';

export const ListarSalas: React.FC = () => {
    const perfil = useSelector(getPerfil);
    const user = useSelector(getUser);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeader(true))
    }, [])
    
    const handleOpen = (params?: Consulta) => {
    if (params != null)
        navigate('/consulta', { state: { consulta: params, tipo: perfil} });
  };
  
const dateFormat = (data: Date) => data.toLocaleDateString("pt-BR");

    const { data, refetch } = useGetConsultasByPsicologo(user.id || 0);
    useEffect(() => {
        refetch();
    }, []);

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerClassName: 'super-app-theme--header',
            headerName: 'ID',
            flex: 1
        },
        {
            field: 'nome',
            headerClassName: 'super-app-theme--header',
            headerName: 'Nome Completo',
            editable: false,
            flex: 1
        },
        {
            field: 'email',
            headerClassName: 'super-app-theme--header',
            headerName: 'Email',
            type: 'email',
            editable: false,
            flex: 1
        },
        {
            field: 'dataCadastro',
            headerClassName: 'super-app-theme--header',
            headerName: 'Data Cadastro',
            type: 'date',
            editable: false,
            flex: 1,
            renderCell: (params) => dateFormat(new Date(params.row.dataCadastro))
        },
        {
            field: 'avaliacao',
            headerClassName: 'super-app-theme--header',
            headerName: 'Avaliação',
            type: 'boolean',
            flex: 1
        },
        {
            field: 'consulta',
            headerClassName: 'super-app-theme--header',
            headerName: 'Consulta',
            type: 'boolean',
            flex: 1,
            renderCell: (params: GridRenderCellParams<number | null, Consulta>) => (
                <Styled.BtnSala status="entrar" onClick={() => handleOpen(params.row)}>Entrar</Styled.BtnSala>
            ),
        },
    
    
    ];
    return (
        <div>
            <Styled.Container>
            <Styled.Fundo></Styled.Fundo>
            <Styled.TabelaContainer>
                <Styled.Titulo><Styled.Icon />Consultas agendadas</Styled.Titulo>
                <Styled.Pesquisa><BiSearchAlt />Pesquisar</Styled.Pesquisa>

                <Box sx={{
                    height: 440,
                    width: '100%',
                    '& .super-app-theme--header': {
                        backgroundColor: theme.palette.primary.main,
                        color: "#FFF",
                        fontWeight: "bold",
                    },
                }}>
                    {data &&
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />}

                </Box>
                </Styled.TabelaContainer>
        </Styled.Container>
        </div>

    )
}