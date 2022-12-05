import * as React from 'react';
import * as Styled from "./ListarPsicologos.styled";
import { BiSearchAlt } from 'react-icons/bi';
import { ListarUsuarios } from '../../components/ListarUsuarios';
import { useGetByPerfil } from '../../api/controllers/usuario';
import { useDispatch } from 'react-redux';
import { setHeader } from '../../reducers/authentication';

export const ListarPsicologos: React.FC = () => {
    const { data, refetch } = useGetByPerfil('3');
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setHeader(true))
    }, [])
    return (
        <Styled.Container>
            <Styled.Fundo></Styled.Fundo>
            <Styled.TabelaContainer>
                <Styled.Titulo><Styled.Icon />Psicólogos</Styled.Titulo>
                <Styled.Pesquisa><BiSearchAlt />Pesquisar</Styled.Pesquisa>
                <ListarUsuarios data={data} refetch={refetch} perfil="3"/>
            </Styled.TabelaContainer>
        </Styled.Container>

    )
}