import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Cadastro from '../pages/Cadastro';
import { Dashboard } from "../pages/Dashboard";
import Login from '../pages/Login';

export function Routes() {
    return (
        <RoutesWrapper>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </RoutesWrapper>
    );
}