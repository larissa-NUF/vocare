import { useSelector } from "react-redux";
import { perfil } from "../reducers/authentication";
import { AdminRoute } from "./AdminRoute";
import { AlunoRoute } from "./AlunoRoute";
import { DeslogadoRoute } from "./DeslogadoRoute";
import { Route, Routes as RoutesDOM } from "react-router-dom";
import { Home } from "../pages/Home/Index";

export function Routes() {
    const usuario = useSelector(perfil);

    if (usuario === "Deslogado") return <DeslogadoRoute />;

    if (usuario === "Aluno") return <AlunoRoute />;

    if (usuario === "Admin") return <AdminRoute />;

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