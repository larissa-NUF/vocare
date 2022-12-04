import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { ListarClientes } from "../pages/ListarClientes";
import { ListarSalas } from "../pages/ListarClientesPsicologo/ListarSalas";
import { ListarPsicologos } from "../pages/ListarPsicologos";

export function AdminRoute() {
    return(
        <RoutesWrapper>
            <Route path="/dashboard" element={<ListarSalas />}></Route>
            <Route path="/clientes" element={<ListarClientes />}></Route>
            <Route path="/psicologos" element={<ListarPsicologos />}></Route>
           
        </RoutesWrapper>
    );
}