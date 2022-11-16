import React from "react";
import PlanosForm from "./PlanosForm";
import * as Styled from "./Cadastro.styled";
import logo from '../../assets/img/logo.png';
import { Typography } from "@material-ui/core";
import DadosPessoais from "./DadosPessoaisForm";



const Cadastro: React.FC = () => {

    return (
        <Styled.Fundo>
            <Styled.LogoVocale src={logo}/>
            <Styled.EtapaTitulo variant="h4">Etapa 2/4</Styled.EtapaTitulo>
            <DadosPessoais/>
            {/* <PlanosForm /> */}
        </Styled.Fundo>
    );
};

export default Cadastro;