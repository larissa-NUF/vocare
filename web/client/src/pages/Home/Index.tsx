import * as React from 'react';
import { Header } from './Header/Index';
import { Sobre } from './Sobre/Index';
import { Teste } from './Teste/Index';
import { Equipe } from './Equipe/Index';
import { Contato } from './Contato/Index';
import { Footer } from './Footer/Index';

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Sobre />
            <Teste />
            <Equipe />
            <Contato />
            <Footer />
        </>
    )
}