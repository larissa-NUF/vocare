import React from "react";
import PagamentoForm from "./PagamentoForm";
import * as Styled from "./Pagamento.styled";
import logo from '../../assets/img/logo.png';

const Pagamento: React.FC = () => {

    return (
        <Styled.Fundo>
            <Styled.LogoVocare src={logo}/>
            <Styled.EtapaTitulo variant="h4">Etapa 3/4</Styled.EtapaTitulo>
            <PagamentoForm />
        </Styled.Fundo>
    );
};

export default Pagamento;