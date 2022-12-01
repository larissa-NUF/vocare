import * as React from 'react';
import Box from '@mui/material/Box';
import * as Styled from "./ListarUsuarios.styled"
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { theme } from '../../styles/theme';
import { useGetAll } from '../../api/controllers/usuario';
import { BiSearchAlt } from 'react-icons/bi';
import { RiEyeFill } from "react-icons/ri";

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
        flex: 1
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
        flex: 1
    },
    {
        type: "acessar",
        headerClassName: 'super-app-theme--header',
        field: "acessar",
        headerName: "",
        flex: 0.2,
        renderCell: (params: GridRenderCellParams<number>) => (
            <RiEyeFill color='#469ed6' cursor='pointer' size={20} onClick={() => console.log(params.row.id)} />
        ),
    },
    

];

export const ListarUsuarios: React.FC = () => {
    const { data } = useGetAll();
    return (
   
        <Styled.Container>
            <Styled.Fundo></Styled.Fundo>
                <Styled.TabelaContainer>
                <Styled.Titulo><Styled.Icon />Alunos</Styled.Titulo>
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
   
    )
}