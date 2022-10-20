import * as React from 'react';
import Box from '@mui/material/Box';
import * as Styled from "./ListaAlunos.styled"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { boolean } from 'yup';
import { theme } from '../../styles/theme';
import { FaUserAlt as Fa } from 'react-icons/fa';
import { useGetAll } from '../../api/controllers/usuario';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerClassName: 'super-app-theme--header',
        headerName: 'ID',
        width: 90,
    },
    {
        field: 'nome',
        headerClassName: 'super-app-theme--header',
        headerName: 'Nome Completo',
        width: 200,
        editable: false,
    },
    {
        field: 'email',
        headerClassName: 'super-app-theme--header',
        headerName: 'Email',
        type: 'email',
        width: 200,
        editable: false,
    },
    {
        field: 'dataCadastro',
        headerClassName: 'super-app-theme--header',
        headerName: 'Data Cadastro',
        type: 'date',
        width: 200,
        editable: false,
    },
    {
        field: 'testeRealizado',
        headerClassName: 'super-app-theme--header',
        headerName: 'Teste Realizado',
        type: 'boolean',
        width: 200,
    },
];

export const ListaAlunos: React.FC = () => {
    const { data } = useGetAll();
    return (
        <div>
            <Styled.Fundo></Styled.Fundo>
            <Styled.Container>
                <Styled.Titulo><Styled.Icon />Alunos</Styled.Titulo>
                <Box sx={{
                    height: 440,
                    width: '100%', 
                    '& .super-app-theme--header': {
                        backgroundColor: theme.palette.primary.main,
                        color: "#FFF",
                        textDecoration: "bold",
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
            </Styled.Container>
        </div>
    )
}