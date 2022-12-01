import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { perfil } from "../../reducers/authentication";
import { SideBar } from "../SideBar"
import { LayoutProps } from "./Layout.types"

export const Layout = ({ children }: LayoutProps) => {
    const usuario = useSelector(perfil);

    return (
        <div style={{ height:"100vh" }}>
            {usuario === "Aluno" && 
                <Grid container>
                    <Grid xs={2}>
                        <SideBar />
                    </Grid>
                    <Grid xs={10}>
                        {children}
                    </Grid>
                </Grid>
            }
            {usuario === "Deslogado" &&
                <Grid>
                    {children}
                </Grid>
            }
        </div>
    )
}