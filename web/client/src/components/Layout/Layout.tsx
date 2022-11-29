import { Grid } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../../pages/Dashboard"
import { perfil, setPerfil } from "../../reducers/authentication";
import { SideBar } from "../SideBar"
import { LayoutProps } from "./Layout.types"

export const Layout = ({ children }: LayoutProps) => {
    const usuario = useSelector(perfil);

    const dispatch = useDispatch();

    const change = () => {
        dispatch(setPerfil("Aluno"));
    }

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
                    <button onClick={change}>MUDAR PERFIL</button>
                    {children}
                </Grid>
            }
        </div>
    )
}