import { Grid, Typography } from "@mui/material";
import { getUser, setHeader } from "../../../reducers/authentication";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SiPhabricator } from "react-icons/si";
import * as Styled from "./Omega.styled";
import lamina1 from "./../../../assets/img/lamina1.png";
import lamina2 from "./../../../assets/img/lamina2.png";
import lamina3 from "./../../../assets/img/lamina3.png";
import lamina4 from "./../../../assets/img/lamina4.png";
import { useEnviarTeste } from "../../../api/controllers/teste";
import { TesteReposta } from "../../../api/models/teste";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Omega = () => {
    const [lamina, setLamina] = useState(1);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setHeader(true))
    }, [])

    const { id } = useSelector(getUser);

    const [texto1, setTexto1] = useState("");
    const [texto2, setTexto2] = useState("");
    const [texto3, setTexto3] = useState("");
    const [texto4, setTexto4] = useState("");

    const { mutateAsync } = useEnviarTeste();

    const handleChange = (e: any) => {
        if (e.target.id === "img1") {
            setTexto1(e.target.value);
        }
        if (e.target.id === "img2") {
            setTexto2(e.target.value);
        }
        if (e.target.id === "img3") {
            setTexto3(e.target.value);
        }
        if (e.target.id === "img4") {
            setTexto4(e.target.value);
        }
    }

    const handleEnviar = async () => {
        let listaResposta: Array<TesteReposta> = [
            { idPergunta: 1, resposta: texto1 },
            { idPergunta: 2, resposta: texto2 },
            { idPergunta: 3, resposta: texto3 },
            { idPergunta: 4, resposta: texto4 }
        ]

        await mutateAsync({
            teste: {
                idUsuario: id || 0
            },
            respostas: listaResposta
        });

        toast.success("Respostas salvas com sucesso!");
        navigate("/dashboard");
    }

    return (
        <Styled.ContainerDiv>
            <Grid container width="80%">
                <Styled.GridTitle xs={12}>
                    <SiPhabricator fontSize="32px" style={{ marginRight: "15px" }} />
                    <Styled.Title>Teste Projetivo Ômega (TPO)</Styled.Title>
                </Styled.GridTitle>
                <Styled.GridTeste xs={12}>
                    <Styled.TitleTeste>Imagem - {lamina}</Styled.TitleTeste>
                    <hr style={{ border: "none", background: "#8EB9D4", height: "1px" }} />
                    <Styled.GridDescricao>
                        <img width="30%" height="30%" style={{ marginRight: "20px" }} src={
                            lamina === 1 ? lamina1 : lamina === 2 ? lamina2 : lamina === 3 ? lamina3 : lamina === 4 ? lamina4 : ""
                        } alt="" />
                        <Styled.GridAvaliacao>
                            <Styled.DivTexto>
                                <Typography>Crie uma história com a imagem ao lado, com o que ela despertar em você ao observá-la: </Typography>
                                <Typography style={{ color: "red", fontSize: "12px" }}>OBS.: Se você sair, o que tiver sido escrito será perdido!</Typography>

                                <Styled.TextArea style={{ resize: "none" }} name="" value={texto1} onChange={handleChange} hidden={lamina != 1} id="img1"></Styled.TextArea>
                                <Styled.TextArea name="" value={texto2} onChange={handleChange} hidden={lamina != 2} id="img2"></Styled.TextArea>
                                <Styled.TextArea name="" value={texto3} onChange={handleChange} hidden={lamina != 3} id="img3"></Styled.TextArea>
                                <Styled.TextArea name="" value={texto4} onChange={handleChange} hidden={lamina != 4} id="img4"></Styled.TextArea>
                            </Styled.DivTexto>
                            {lamina === 1 &&
                                <Styled.ButtonStart disabled={texto1 === ""} onClick={() => setLamina(2)} variant="outlined" color="primary">
                                    Próxima imagem
                                    <Styled.SetaAvancar />
                                </Styled.ButtonStart>
                            }
                            {lamina === 2 &&
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <Styled.ButtonStart onClick={() => setLamina(1)} variant="outlined" color="primary">
                                        Voltar
                                        <Styled.SetaVoltar />
                                    </Styled.ButtonStart>
                                    <Styled.ButtonStart disabled={texto2 === ""} onClick={() => setLamina(3)} variant="outlined" color="primary">
                                        Próxima imagem
                                        <Styled.SetaAvancar />
                                    </Styled.ButtonStart>
                                </div>

                            }
                            {lamina === 3 &&
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <Styled.ButtonStart onClick={() => setLamina(2)} variant="outlined" color="primary">
                                        Voltar
                                        <Styled.SetaVoltar />
                                    </Styled.ButtonStart>
                                    <Styled.ButtonStart disabled={texto3 === ""} onClick={() => setLamina(4)} variant="outlined" color="primary">
                                        Próxima imagem
                                        <Styled.SetaAvancar />
                                    </Styled.ButtonStart>
                                </div>
                            }
                            {lamina === 4 &&
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <Styled.ButtonStart onClick={() => setLamina(3)} variant="outlined" color="primary">
                                        Voltar
                                        <Styled.SetaVoltar />
                                    </Styled.ButtonStart>
                                    <Styled.ButtonStart disabled={texto4 === ""} onClick={handleEnviar} variant="outlined" color="primary">
                                        Enviar
                                        <Styled.Enviar />
                                    </Styled.ButtonStart>
                                </div>
                            }
                        </Styled.GridAvaliacao>
                    </Styled.GridDescricao>
                </Styled.GridTeste>
            </Grid>
        </Styled.ContainerDiv>
    )
}