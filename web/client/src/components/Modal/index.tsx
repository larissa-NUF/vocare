import * as React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Usuario } from '../../api/models/usuario';
import { useGetAll, useGetById, useUsuarioDelete, useUsuarioUpdate } from '../../api/controllers/usuario';
import { Box, FormControl, IconButton, Modal } from '@mui/material';
import { theme } from '../../styles/theme';
import { FiTrash2 } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';
import * as Styled from './Modal.styled';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MainButton } from '../MainButton';
import { ModalProps } from './Modal.types';

const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email().required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
    confirmarSenha: Yup.string().required("Campo obrigatório")
        .oneOf([Yup.ref('senha'), null], "As senhas precisam ser iguais!")
});

export function ModalAddEdit({id, onSubmit, open, handleClose}: ModalProps) {

    const { data: usuario} = useGetById(id || 0);

    useEffect(() => {
        resetForm();
      }, []);
      
    const { handleSubmit, handleChange, handleBlur, values, errors, resetForm, touched } = useFormik({
        initialValues: {
            nome: usuario?.nome || "",
            email: usuario?.email || "",
            senha: usuario?.senha || "",
            confirmarSenha: usuario?.senha || "",
        },
        onSubmit,
        validationSchema,
        enableReinitialize: true
    });

    

    return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Styled.ModalSala>
                    <form onSubmit={handleSubmit} id='editar'>
                        <FormControl fullWidth>
                            <Styled.Label variant="body1">Nome:</Styled.Label>
                            <Styled.FormInput
                                variant="outlined"
                                size="small"
                                id="nome"
                                value={values.nome}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.nome && errors.nome}
                            <br />
                            <Styled.Label variant="body1">Email:</Styled.Label>
                            <Styled.FormInput
                                variant="outlined"
                                size="small"
                                id="email"
                                type="myEmail"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email}
                            <br />
                            <Styled.Label variant="body1">Senha:</Styled.Label>
                            <Styled.FormInput
                                variant="outlined"
                                size="small"
                                id="senha"
                                type="password"
                                value={values.senha}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.senha && errors.senha}
                            <br />
                            <Styled.Label variant="body1">Confirmar senha:</Styled.Label>
                            <Styled.FormInput
                                variant="outlined"
                                size="small"
                                id="confirmarSenha"
                                type="password"
                                value={values.confirmarSenha}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.confirmarSenha && errors.confirmarSenha}
                            <br />
                        </FormControl >
                        <div style={{textAlign: 'center'}}>
                        <MainButton type="submit">
                            Salvar
                        </MainButton>
                        </div>
                        
                    </form>
                </Styled.ModalSala>

            </Modal>
            

    )
}