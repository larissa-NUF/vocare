import React from "react";
import * as Styled from "./Header.styled";
import Logo from '../../assets/img/logo.png';
import Triangulo from '../../assets/img/divider.png';
import { Box, Grid } from "@material-ui/core";
import { theme } from "../../styles/theme";
import { FaUserAlt as Fa } from "react-icons/fa";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { SecundaryButton } from "../../components/SecundaryButton";
import { useNavigate } from "react-router-dom";


export const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <Styled.GridContainer>
            <AppBar 
                component="nav" 
                style={{ background: 'transparent', boxShadow: 'none', padding: "0 100px 0 100px", justifyContent: "center" }}
            >
                <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>

                    <Styled.GridNavItens>
                        <Styled.LogoNav src={Logo} alt="Logo Vocare azul" />

                        <Styled.NavItem>Início</Styled.NavItem>
                        <Styled.NavItem>Sobre</Styled.NavItem>
                        <Styled.NavItem>Contato</Styled.NavItem>
                    </Styled.GridNavItens>

                    <Grid onClick={() => navigate("/login")} style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "8px" }}>
                        <Styled.NavDireita>
                            <Fa color="white" />
                            <p>Login</p>
                        </Styled.NavDireita>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Styled.GridContainer>
    );
}
