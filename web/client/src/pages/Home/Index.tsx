import * as React from 'react';
import { Header } from './Header/Index';
import { Sobre } from './Sobre/Index';
import { Teste } from './Teste/Index';

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Sobre />
            <Teste />
        </>
    )
}