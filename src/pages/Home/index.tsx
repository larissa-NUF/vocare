import React from "react";
import DadosPessoais from "./DadosPessoaisForm";
import { Fundo } from "./Home.style";
import logo from '../../assets/img/logo.svg';

const Home: React.FC = () => {

    return (
        <Fundo>
            <img src={logo}/>
            <DadosPessoais/>
        </Fundo>
    );
};

export default Home;
