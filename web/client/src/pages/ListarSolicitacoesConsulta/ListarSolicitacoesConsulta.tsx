import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setHeader } from "../../reducers/authentication";
import * as Styled from './ListarSolicitacoesConsulta.styled';
import { Tabela } from "./Tabela";
export const ListarSolicitacoesConsulta: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeader(true))
    }, [])

    return (
        <div>
            <Styled.Container>
            <Styled.Fundo></Styled.Fundo>
            <Styled.TabelaContainer>
                <Styled.Titulo><Styled.Icon />Solicitações de chamada</Styled.Titulo>
                <Styled.Pesquisa><BiSearchAlt />Pesquisar</Styled.Pesquisa>

                <Tabela />
                </Styled.TabelaContainer>
        </Styled.Container>
        </div>
)}