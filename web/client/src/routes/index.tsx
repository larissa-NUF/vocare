import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Cadastro from '../pages/Cadastro';
import Consulta from "../pages/Consulta";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home/Index";
import { ListarUsuarios } from "../pages/ListarUsuarios";
import Login from '../pages/Login';
import Pagamento from "../pages/Pagamento";

export function Routes() {
    return (
        <RoutesWrapper>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/pagamento" element={<Pagamento />}></Route>
            <Route path="/clientes" element={<ListarUsuarios />}></Route>
            <Route path="/consulta" element={<Consulta />}></Route>
        </RoutesWrapper>
    );
}