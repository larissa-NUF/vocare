import { CardProps } from "@mui/material";
import { ReactNode } from "react";

export interface CardDashboardProps extends CardProps{
    children?: ReactNode;
    titulo: string;
}