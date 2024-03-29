import * as React from 'react';
import * as Styled from "./ListarClientes.styled";
import { BiSearchAlt } from 'react-icons/bi';
import { ListarUsuarios } from '../../components/ListarUsuarios';
import { useGetByPerfil } from '../../api/controllers/usuario';
import { useDispatch } from 'react-redux';
import { setHeader } from '../../reducers/authentication';

export const ListarClientes: React.FC = () => {
    const { data, refetch } = useGetByPerfil('2');
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setHeader(true))
    }, [])
    return (
        <Styled.Container>
            <Styled.Fundo></Styled.Fundo>
            <Styled.TabelaContainer>
                <Styled.Titulo><Styled.Icon />Clientes</Styled.Titulo>
                <Styled.Pesquisa><BiSearchAlt />Pesquisar</Styled.Pesquisa>
                <ListarUsuarios data={data} refetch={refetch} perfil="2"/>
            </Styled.TabelaContainer>
        </Styled.Container>

    )
}