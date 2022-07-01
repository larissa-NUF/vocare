import React from "react";
import DadosPessoais from "./DadosPessoaisForm";
import { Fundo } from "./Home.style";
import logo from '../../assets/img/logo.svg';
import { Typography } from "@material-ui/core";

const Home: React.FC = () => {

    return (
        <Fundo>
            <img alt="" src={logo}/>
            <Typography>Etapa 2/4</Typography>
            <DadosPessoais/>
        </Fundo>
    );
};

export default Home;
