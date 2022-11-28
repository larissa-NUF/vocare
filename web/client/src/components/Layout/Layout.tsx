import { Grid } from "@mui/material";
import { useState } from "react";
import { SideBar } from "../SideBar";
import { LayoutProps } from "./Layout.types";

export const Layout = ({ children }: LayoutProps) => {
    const [usuario, setUsuario] = useState("deslogado");

    return (
        <div style={{ height:"100vh" }}>
            {usuario === "aluno" && 
                <Grid container>
                    <Grid xs={2}>
                        <SideBar />
                    </Grid>
                    <Grid xs={10}>
                        {children}
                    </Grid>
                </Grid>
            }
            {usuario === "deslogado" &&
                <Grid>

                    {children}
                </Grid>
            }
        </div>
    )
}