import { Grid } from "@material-ui/core"
import { useState } from "react"
import { Dashboard } from "../../pages/Dashboard"
import { SideBar } from "../SideBar"
import { LayoutProps } from "./Layout.types"

export const Layout = ({ children }: LayoutProps) => {
    const [usuario, setUsuario] = useState("deslogado");

    return (
        <>
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
        </>
    )
}