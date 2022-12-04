import * as React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Usuario } from '../../api/models/usuario';
import { useCadastro, useGetAll, useGetById, useUsuarioDelete, useUsuarioUpdate } from '../../api/controllers/usuario';
import { Box, FormControl, IconButton, Modal } from '@mui/material';
import { theme } from '../../styles/theme';
import { FiTrash2 } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';
import * as Styled from './ListarUsuarios.styled';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ModalEditarProps } from './ListartUsuarios.types';
import { ModalAddEdit } from '../Modal';

const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email().required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
    confirmarSenha: Yup.string().required("Campo obrigatório")
        .oneOf([Yup.ref('senha'), null], "As senhas precisam ser iguais!")
});

export type FormValues = {
    nome: string,
    email: string,
    senha: string,
    confirmarSenha: string,
}

export function ListarUsuarios({data, refetch, perfil}: ModalEditarProps) {
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [id, setId] = useState(0);

    const { data: usuario, refetch: refetchUser } = useGetById(id);
    const { mutateAsync } = useUsuarioDelete();
    const { mutateAsync: update } = useUsuarioUpdate();
    const { mutateAsync: add, error } = useCadastro();
    const handleClose = () => setOpen(false);
    const handleCloseAdd = () => setOpenAdd(false);

    useEffect(() => {
        refetchUser();
    }, [id]);

    async function onSubmit(valuesSubmit: FormValues) {
        if (!usuario) return;
        await update({
            ...usuario,
            ...valuesSubmit
        });

        //resetForm();
        refetch();
        setOpen(false);

    }


  async function onSubmitAdd(valuesSubmit: FormValues) {
    await add({
      nome: valuesSubmit.nome,
      senha: valuesSubmit.senha,
      login: valuesSubmit.email,
      perfis: perfil,
      email: valuesSubmit.email 
    });
    refetch();
    setOpenAdd(false);
  }

    async function Delete(id?: number) {
        if (id)
            await mutateAsync(id);
        refetch();
    }

    async function Update(usuario: Usuario) {
        setOpen(true);
        if (usuario?.id){
            setId(usuario?.id);
        }
        
    }

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerClassName: 'super-app-theme--header',
            headerName: 'ID',
            flex: 0.1
        },
        {
            field: 'nome',
            headerClassName: 'super-app-theme--header',
            headerName: 'Nome Completo',
            editable: false,
            flex: 1
        },
        {
            field: 'login',
            headerClassName: 'super-app-theme--header',
            headerName: 'Login',
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
            field: 'dataAtualizacao',
            headerClassName: 'super-app-theme--header',
            headerName: 'Data Atualização',
            type: 'date',
            flex: 1
        },
        {
            field: 'apagar',
            headerClassName: 'super-app-theme--header',
            headerName: '',
            type: '',
            flex: 0.1,
            renderCell: (params: GridRenderCellParams<number | null, Usuario>) => (
                <IconButton onClick={() => Delete(params.row.id)}><FiTrash2 /></IconButton>
            ),
        },
        {
            field: 'editar',
            headerClassName: 'super-app-theme--header',
            headerName: '',
            type: '',
            flex: 0.1,
            renderCell: (params: GridRenderCellParams<number | null, Usuario>) => (
                <IconButton onClick={() => Update(params.row)}><BsPencil /></IconButton>
            ),
        },


    ];
    return (
        <div>
            <ModalAddEdit onSubmit={onSubmit} open={open} handleClose={handleClose} id={id}/>
            <ModalAddEdit onSubmit={onSubmitAdd} open={openAdd} handleClose={handleCloseAdd}/>
            <Styled.Btn>
            <Styled.btnAdicionar onClick={() => {setOpenAdd(true); setId(0);}}><Styled.iconAdd/>Adicionar</Styled.btnAdicionar>
            </Styled.Btn>

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