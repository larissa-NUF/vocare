import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';

export function Routes() {
    return (
        <RoutesWrapper>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </RoutesWrapper>
    );
}