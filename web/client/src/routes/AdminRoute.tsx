import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { ListarClientes } from "../pages/ListarClientes";
import { ListarPsicologos } from "../pages/ListarPsicologos";

export function AdminRoute() {
    return(
        <RoutesWrapper>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/clientes" element={<ListarClientes />}></Route>
            <Route path="/psicologos" element={<ListarPsicologos />}></Route>
           
        </RoutesWrapper>
    );
}