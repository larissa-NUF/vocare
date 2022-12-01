import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home/Index"

export function AlunoRoute() {
    return (
        <RoutesWrapper>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </RoutesWrapper>
    );
}