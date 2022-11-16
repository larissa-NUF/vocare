import { Grid } from '@material-ui/core';
import React from 'react';
import * as Styled from "./Sobre.styled";
import './estilo.css';
import { MdCircle } from 'react-icons/md';
import { theme } from '../../../styles/theme';

export const Sobre: React.FC = () => {
    return (
        <>
            <Styled.Divider>
                <Styled.Simbolo />
            </Styled.Divider>
            <Styled.ContainerSobre>
                <div style={{ gap: "8px",  display: "flex", alignItems: "center", flexDirection: "row", marginTop: theme.spacing(2) }}>
                    <MdCircle fill='#469ED6' /><Styled.TituloSobre>SOBRE</Styled.TituloSobre>
                </div>
            </Styled.ContainerSobre>
        </>
    )
}