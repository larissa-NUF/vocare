import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Cadastro from '../pages/Cadastro';
import { Consulta } from "../pages/Consulta";
import { Dashboard } from "../pages/Dashboard";
import { Faculdades } from "../pages/Faculdades";
import { ListaAlunos } from "../pages/Lista-Alunos";
import Login from '../pages/Login';
import Pagamento from "../pages/Pagamento";

export function Routes() {
    return (
        <RoutesWrapper>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/pagamento" element={<Pagamento />}></Route>
            <Route path="/lista-alunos" element={<ListaAlunos />}></Route>
            <Route path="/faculdades" element={<Faculdades />}></Route>
            <Route path="/consulta" element={<Consulta />}></Route>
        </RoutesWrapper>
    );
}