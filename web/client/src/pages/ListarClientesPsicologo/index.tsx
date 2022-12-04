import * as React from 'react';
import * as Styled from "./ListarClientesPsicologo.styled";
import { ListarSalas } from './ListarSalas';
import { BiSearchAlt } from 'react-icons/bi';


export const ListarClientesPsicologo: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.Fundo></Styled.Fundo>
            <Styled.TabelaContainer>
                <Styled.Titulo><Styled.Icon />Alunos</Styled.Titulo>
                <Styled.Pesquisa><BiSearchAlt />Pesquisar</Styled.Pesquisa>
                <ListarSalas/>
            </Styled.TabelaContainer>
        </Styled.Container>

    )
}