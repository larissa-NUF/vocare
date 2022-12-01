import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { ListaAlunos } from "../pages/Lista-Alunos";

export function AdminRoute() {
    return(
        <RoutesWrapper>
            <Route path="/lista-alunos" element={<ListaAlunos />}></Route>
        </RoutesWrapper>
    );
}