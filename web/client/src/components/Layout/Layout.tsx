import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { getPerfil } from "../../reducers/authentication";
import { SideBar } from "../SideBar"
import { LayoutProps } from "./Layout.types"

export const Layout = ({ children }: LayoutProps) => {
    const usuario = useSelector(getPerfil);

    return (
        <div style={{ height:"100vh" }}>
            {usuario === "Cliente" && 
                <Grid container>
                    <Grid xs={2}>
                        <SideBar />
                    </Grid>
                    <Grid style={{ backgroundColor: "#F7F7F7" }} xs={10}>
                        {children}
                    </Grid>
                </Grid>
            }
            {usuario === "Admin" && 
                <Grid container>
                    <Grid xs={2}>
                        <SideBar />
                    </Grid>
                    <Grid xs={10}>
                        {children}
                    </Grid>
                </Grid>
            }
            {usuario === "Psicologo" && 
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