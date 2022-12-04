import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Consulta from "../pages/Consulta";
import { ListarClientesPsicologo } from "../pages/ListarClientesPsicologo";

export function PsicologoRoute() {
    return (
        <RoutesWrapper>
            <Route path="/consulta" element={<Consulta />}></Route>
            <Route path="/usuarios" element={<ListarClientesPsicologo />}></Route>
        </RoutesWrapper>
    )
}