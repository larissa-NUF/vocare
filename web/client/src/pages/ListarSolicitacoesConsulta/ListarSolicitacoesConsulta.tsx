import { BiSearchAlt } from "react-icons/bi";
import * as Styled from './ListarSolicitacoesConsulta.styled';
import { Tabela } from "./Tabela";
export const ListarSolicitacoesConsulta: React.FC = () => {

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