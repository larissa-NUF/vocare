import React from "react";
import * as Styled from "./Footer.styled";
import "../estilo.css";
import { Grid } from "@mui/material";
import { theme } from "../../../styles/theme";
import Logo from "../../../assets/img/logo-completo.png"


export const Footer: React.FC = () => {
    return (
        <Grid style={{ background: 'linear-gradient(to right, #071844, #37689B)', margin: "0", height: "auto", padding: "50px 20vh", position: "relative" }}>
            <img src={Logo} alt="Logo Vocare - Velejando os mares do seu conhecimento!" style={{maxHeight: "25vh", display: "flex", marginLeft: "auto", marginRight: "auto"}} />

            <div className="custom-shape-divider-top-1669950573">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </Grid>
    )
}