import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Consulta from "../pages/Consulta";

export function PsicologoRoute() {
    return (
        <RoutesWrapper>
            <Route path="/consulta" element={<Consulta />}></Route>
        </RoutesWrapper>
    )
}