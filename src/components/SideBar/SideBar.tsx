import * as Styled from './SideBar.styled';
import imagem from "./../../assets/img/logo-branco.png";
import { Grid } from '@material-ui/core';
import { SiGoogleanalytics } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { FaUserGraduate, FaUserAlt } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi"
import { MdModeEditOutline } from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { theme } from '../../styles/theme';

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
                            <Styled.MenuItem container style={{textDecoration: "bold"}}>
                                <FaUserAlt color="white" />
                                Alunos       
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/")} style={{borderBottom:"1px solid #CCC", paddingBottom:"25px"}}>
                            <Styled.MenuItem container>
                                <BiHelpCircle color="white" />
                                Ajuda       
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/lista-alunos")}>
                            <Styled.MenuItem container style={{fontSize:"20px", fontWeight:"700", gap: theme.spacing(1.4)}}>
                                Larissa Nunes       
                                <MdModeEditOutline color="white" />
                            </Styled.MenuItem>
                        </Styled.Itens>
                    </Grid>
                </Styled.Layout>
                <Grid xs={12} style={{display: "flex", paddingBottom: "0", height: "25%", width:"100%"}}>
                    <Styled.BotaoSair size='medium'>
                        <RiLogoutBoxLine />
                        Sair
                    </Styled.BotaoSair>
                </Grid>
            </Styled.SideBar>
        </>
    )
};