import { Button, Grid, Typography } from "@mui/material"
import { FaImages } from "react-icons/fa"
import tpo from "./../../assets/img/tpo.png"

export const Teste = () => {
    return (
        <Grid container>
            <Grid xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaImages />
                <Typography>Testes Projetivos</Typography>
            </Grid>
            <Grid>
                <Typography>Teste Projetivo Ômega</Typography>
                <hr />
                <Grid style={{ display: "flex" }}>
                    <img style={{ filter: "blur(5px)" }} src={tpo} alt="" />
                    <Grid>
                        <Typography>São 4 imagens que estimulam os conflitos básicos na hora da escolha de adolescentes e adultos.</Typography>
                        <Typography>E em cada imagem o orientado terá que criar uma história, baseado no que ele vê.</Typography>
                        <Typography>Isso trás para o orientador uma perspectiva da personalidade, inseguranças, conflitos relacionado a vida e consequentemente a escolha profissional.</Typography>

                        <Button variant="contained" color="secondary">Faça a avaliação</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}