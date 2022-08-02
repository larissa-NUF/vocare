import React from "react";
import DadosPessoais from "./DadosPessoaisForm";
import * as Styled from "./Cadastro.styled";
import logo from '../../assets/img/logo.png';
import { Typography } from "@material-ui/core";


const Cadastro: React.FC = () => {

    return (
        <Styled.Fundo>
            <Styled.LogoVocale src={logo}/>
            <Styled.EtapaTitulo variant="h4">Etapa 2/4</Styled.EtapaTitulo>
            <DadosPessoais/>
        </Styled.Fundo>
    );
};

export default Cadastro;
