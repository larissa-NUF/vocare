import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Cadastro from '../pages/Cadastro';
import { Dashboard } from "../pages/Dashboard";
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
        </RoutesWrapper>
    );
}