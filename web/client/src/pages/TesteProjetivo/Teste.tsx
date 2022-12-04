import { Button, Grid, Typography } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaImages } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../reducers/authentication";
import tpo from "./../../assets/img/profissao.jpg";
import * as Styled from "./Teste.styled";

export const Teste = () => {

    const navigate = useNavigate();

    return (
        <Styled.ContainerDiv>
            <Grid container width="80%">
                <Styled.GridTitle xs={12}>
                    <FaImages fontSize="32px" style={{ marginRight: "15px" }} />
                    <Styled.Title>Testes Projetivos</Styled.Title>
                </Styled.GridTitle>
                <Styled.GridTeste xs={12}>
                    <Styled.TitleTeste>Teste Projetivo Ômega</Styled.TitleTeste>
                    <hr style={{ border: "none", background: "#8EB9D4", height: "1px" }}/>
                    <Styled.GridDescricao>
                        <img width="30%" height="30%" style={{ marginRight: "20px" }} src={tpo} alt="" />
                        <Styled.GridAvaliacao>
                            <Styled.DivTexto>
                                <Typography>São 4 imagens que estimulam os conflitos básicos do indivíduo que realizar o teste.</Typography>
                                <Typography>E para cada imagem o orientado tem que criar uma história, baseado no que ele sente ao ver ela</Typography>
                                <Typography>Para cada imagem, o psicólogo orientador obtém uma perspectiva da personalidade, conflitos, inseguranças do indivíduo relacionados à sua vida.</Typography>
                            </Styled.DivTexto>

                            <Styled.ButtonStart onClick={() => navigate("/teste-projetivo/omega")} variant="outlined" color="primary">
                                Faça a avaliação
                                <AiOutlineArrowRight />
                            </Styled.ButtonStart>
                        </Styled.GridAvaliacao>
                    </Styled.GridDescricao>
                </Styled.GridTeste>
            </Grid>
        </Styled.ContainerDiv>
    )
}