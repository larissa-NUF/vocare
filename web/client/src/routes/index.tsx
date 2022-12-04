import { useSelector } from "react-redux";
import { getPerfil } from "../reducers/authentication";
import { AdminRoute } from "./AdminRoute";
import { ClientRoute } from "./ClienteRoute";
import { DeslogadoRoute } from "./DeslogadoRoute";
import { Route, Routes as RoutesDOM } from "react-router-dom";
import { Home } from "../pages/Home/Index";
import { PsicologoRoute } from "./PsicologoRoute";

export function Routes() {
    const usuario = useSelector(getPerfil);
    if (usuario === "Deslogado") return <DeslogadoRoute />;

    if (usuario === "Cliente") return <ClientRoute />;

    if (usuario === "Admin") return <AdminRoute />;

    if (usuario === "Psicologo") return <PsicologoRoute />

    return (
        <RoutesDOM>
         
        </RoutesDOM>
    );
}