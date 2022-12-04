import * as React from 'react';
import Box from '@mui/material/Box';
import * as Styled from "./ListarSalas.styled"
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { theme } from '../../../styles/theme';
import { useGetAll } from '../../../api/controllers/usuario';
import { ModalEntrarSala } from '../../../components/ModalEntrarSala';
import { Usuario } from '../../../api/models/usuario';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPerfil } from '../../../reducers/authentication';

export const ListarSalas: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);
    const perfil = useSelector(getPerfil);
  const handleOpen = (params?: Usuario) => {
    setOpen(true);
    if(params)
    if (params.id != null)
    setId(params.id);
  };
  const handleClose = () => setOpen(false);

    const { data } = useGetAll();

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
            flex: 1,
            renderCell: (params: GridRenderCellParams<number | null, Usuario>) => (
                <Styled.BtnSala status="entrar" onClick={() => handleOpen(params.row)}>Criar sala</Styled.BtnSala>
            ),
        },
    
    
    ];
    return (
        <div>
            <ModalEntrarSala open={open} handleClose={handleClose} id={id} tipo={perfil}/>

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
        </div>

    )
}