import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { ListarUsuarios } from "../pages/ListarUsuarios";

export function AdminRoute() {
    return(
        <RoutesWrapper>
            <Route path="/lista-usuarios" element={<ListarUsuarios />}></Route>
        </RoutesWrapper>
    );
}