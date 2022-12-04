import { Route, Routes as RoutesWrapper } from "react-router-dom"
import Cadastro from "../pages/Cadastro";
import { Home } from "../pages/Home/Index";

import Login from "../pages/Login"
import Pagamento from "../pages/Pagamento";

export function DeslogadoRoute() {
    return (
        <RoutesWrapper>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/pagamento" element={<Pagamento />}></Route>
        </RoutesWrapper>
    );
}