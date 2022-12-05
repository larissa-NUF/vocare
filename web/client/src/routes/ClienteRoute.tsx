import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Consulta from "../pages/Consulta";
import { ConsultaCliente } from "../pages/ConsultaCliente";
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home/Index"
import { Teste } from "../pages/TesteProjetivo";
import { Omega } from "../pages/TesteProjetivo/Omega/Omega";

export function ClientRoute() {
    return (
        <RoutesWrapper>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/minhas-consultas" element={<ConsultaCliente />}></Route>
            <Route path="/consulta" element={<Consulta />}></Route>
            <Route path="/teste-projetivo" element={<Teste />}></Route>
            <Route path="/teste-projetivo/omega" element={<Omega />}></Route>
        </RoutesWrapper>
    );
}