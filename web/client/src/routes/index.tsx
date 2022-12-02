import { useSelector } from "react-redux";
import { perfil } from "../reducers/authentication";
import { AdminRoute } from "./AdminRoute";
import { AlunoRoute } from "./ClienteRoute";
import { DeslogadoRoute } from "./DeslogadoRoute";
import { Route, Routes as RoutesDOM } from "react-router-dom";
import { Home } from "../pages/Home/Index";
import { PsicologoRoute } from "./PsicologoRoute";

export function Routes() {
    const usuario = useSelector(perfil);

    if (usuario === "Deslogado") return <DeslogadoRoute />;

    if (usuario === "Cliente") return <AlunoRoute />;

    if (usuario === "Admin") return <AdminRoute />;

    if (usuario === "Psicologo") return <PsicologoRoute />

    return (
        <RoutesDOM>
            <Route path="*" element={<Home />}></Route>
        </RoutesDOM>
    );
}