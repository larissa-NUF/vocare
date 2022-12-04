import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Consulta from "../pages/Consulta";
import { ListarSolicitacoesConsulta } from "../pages/ListarSolicitacoesConsulta";
import { Dashboard } from "../pages/Dashboard";
import { ListarSalas } from "../pages/ListarSalas";

export function PsicologoRoute() {
    return (
        <RoutesWrapper>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/solicitacoes-consulta" element={<ListarSolicitacoesConsulta />}></Route>
            <Route path="/consulta" element={<Consulta />}></Route>
            <Route path="/consultas" element={<ListarSalas />}></Route>
        </RoutesWrapper>
    )
}