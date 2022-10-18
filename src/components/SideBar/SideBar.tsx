import * as Styled from './SideBar.styled';
import imagem from "./../../assets/img/logo-branco.png";
import { Grid } from '@material-ui/core';
import { SiGoogleanalytics } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { FaUserGraduate, FaUserAlt } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi"
import { useNavigate } from 'react-router-dom';

export const SideBar: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Styled.SideBar>
                <Styled.Layout container>
                    <Grid xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "35px", padding: "5px" }}>
                        <img src={imagem} alt="Logo Vocare" width="150px" />
                    </Grid>
                    <Grid  container>
                        <Styled.Itens xs={12} onClick={() => navigate("/")} >
                            <Styled.MenuItem container>
                                <SiGoogleanalytics color="white" />
                                Análise
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/")}>
                            <Styled.MenuItem container>
                                <IoAnalytics color="white" />
                                Setores
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/")}>
                            <Styled.MenuItem container>
                                <FaUserGraduate color="white" />
                                Faculdades
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/lista-alunos")}>
                            <Styled.MenuItem container>
                                <FaUserAlt color="white" />
                                Alunos       
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/")}>
                            <Styled.MenuItem container style={{textDecoration: "bold"}}>
                                <BiHelpCircle color="white" />
                                Ajuda       
                            </Styled.MenuItem>
                        </Styled.Itens>
                    </Grid>
                </Styled.Layout>
            </Styled.SideBar>
        </>
    )
};