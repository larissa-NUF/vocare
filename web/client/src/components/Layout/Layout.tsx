import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../../pages/Dashboard"
import { perfil, setPerfil } from "../../reducers/authentication";
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