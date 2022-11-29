import * as Styled from './SideBar.styled';
import imagem from './../../assets/img/logo-branco.png';
import { Grid } from '@mui/material';
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
                        <Styled.Itens xs={12} onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
                            <Styled.MenuItem container>
                                <SiGoogleanalytics color="white" />
                                Análise
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
                            <Styled.MenuItem container>
                                <IoAnalytics color="white" />
                                Setores
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/faculdades")} style={{ cursor: 'pointer' }}>
                            <Styled.MenuItem container>
                                <FaUserGraduate color="white" />
                                Faculdades
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/lista-alunos")} style={{ cursor: 'pointer' }}>
                            <Styled.MenuItem container style={{fontWeight: "bold"}}>
                                <FaUserAlt color="white" />
                                Alunos       
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/")} style={{borderBottom:"1px solid #8EB9D4", paddingBottom:"25px", cursor: "pointer"}}>
                            <Styled.MenuItem container>
                                <BiHelpCircle color="white" />
                                Ajuda       
                            </Styled.MenuItem>
                        </Styled.Itens>
                        <Styled.Itens xs={12} onClick={() => navigate("/lista-alunos")}>
                            <Styled.MenuItem container style={{fontSize:"20px", fontWeight:"700", gap: theme.spacing(1.4) }}>
                                Larissa Nunes       
                                <MdModeEditOutline color="white" style={{ cursor: 'pointer' }} />
                            </Styled.MenuItem>
                        </Styled.Itens>
                    </Grid>
                </Styled.Layout>
                <Styled.GridBotao xs={12}>
                    <Styled.BotaoSair size='medium'>
                        <RiLogoutBoxLine size={16} />
                        <p>Sair</p>
                    </Styled.BotaoSair>
                </Styled.GridBotao>
            </Styled.SideBar>
        </>
    )
};