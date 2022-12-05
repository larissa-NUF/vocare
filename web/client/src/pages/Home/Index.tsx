import { Header } from './Header/Index';
import { Sobre } from './Sobre/Index';
import { Teste } from './Teste/Index';
import { Equipe } from './Equipe/Index';
import { Contato } from './Contato/Index';
import { Footer } from './Footer/Index';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setHeader } from '../../reducers/authentication';

export const Home: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader(false));
    }, []);
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