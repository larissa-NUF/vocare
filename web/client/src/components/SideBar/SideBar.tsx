import * as Styled from './SideBar.styled';
import imagem from './../../assets/img/logo-branco.png';
import { Grid } from '@mui/material';
import { SiGoogleanalytics } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { FaUserGraduate, FaUserAlt, FaBrain } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi"
import { MdModeEditOutline, MdVideoCall } from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { getPerfil, getUser, logout } from '../../reducers/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';

export const SideBar: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usuario = useSelector(getPerfil);

    const { nome } = useSelector(getUser);
    return (
        <>
            <Styled.SideBar>
                <Styled.Layout container>
                    <Grid xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "35px", padding: "5px" }}>
                        <img src={imagem} alt="Logo Vocare" width="150px" />
                    </Grid>
                    <Grid container>
                        {usuario === "Cliente" &&
                            <>
                                <Styled.Itens xs={12} onClick={() => navigate("/dashboard")} style={{ cursor: 'pointer' }}>
                                    <Styled.MenuItem container>
                                        <SiGoogleanalytics color="white" />
                                        Dashboard
                                    </Styled.MenuItem>
                                </Styled.Itens>
                                <Styled.Itens xs={12} onClick={() => navigate("/teste-projetivo")} style={{ cursor: 'pointer' }}>
                                    <Styled.MenuItem container>
                                        <IoAnalytics color="white" />
                                        Testes Projetivos
                                    </Styled.MenuItem>
                                </Styled.Itens>
                                <Styled.Itens xs={12} onClick={() => navigate("/minhas-consultas")} style={{ cursor: 'pointer' }}>
                                    <Styled.MenuItem container>
                                        <AiFillCheckCircle color="white" />
                                        Consulta
                                    </Styled.MenuItem>
                                </Styled.Itens>
                                <Styled.Itens xs={12} onClick={() => navigate("/") } style={{ borderBottom: "1px solid #8EB9D4", paddingBottom: "25px", cursor: "pointer" }}>
                                    <Styled.MenuItem container>
                                        <BiHelpCircle color="white" />
                                        Ajuda
                                    </Styled.MenuItem>
                                </Styled.Itens>
                            </>
                        }
                        {usuario === "Admin" && 
                            <>
                            <Styled.Itens xs={12} onClick={() => navigate("/clientes")} style={{ cursor: 'pointer' }}>
                                    <Styled.MenuItem container>
                                        <BsFillPeopleFill color="white" />
                                        Clientes
                                    </Styled.MenuItem>
                                </Styled.Itens>
                                <Styled.Itens xs={12} onClick={() => navigate("/psicologos")} style={{ borderBottom: "1px solid #8EB9D4", paddingBottom: "25px", cursor: "pointer" }}>
                                    <Styled.MenuItem container>
                                        <FaBrain color="white" />
                                        Piscólogos
                                    </Styled.MenuItem>
                                </Styled.Itens>
                            </>
                        }

                        {usuario === "Psicologo" && 
                            <>
                            <Styled.Itens xs={12} onClick={() => navigate("/dashboard")} style={{ cursor: 'pointer' }}>
                                    <Styled.MenuItem container>
                                        <SiGoogleanalytics color="white" />
                                        Dashboard
                                    </Styled.MenuItem>
                                </Styled.Itens>
                                <Styled.Itens xs={12} onClick={() => navigate("/solicitacoes-consulta")} style={{ cursor: 'pointer' }}>
                                    <Styled.MenuItem container>
                                        <MdVideoCall color="white" />
                                        Solicitações
                                    </Styled.MenuItem>
                                </Styled.Itens>
                                <Styled.Itens xs={12} onClick={() => navigate("/consultas")} style={{ cursor: 'pointer' }}>
                                    <Styled.MenuItem container>
                                        <AiFillCheckCircle color="white" />
                                        Consultas
                                    </Styled.MenuItem>
                                </Styled.Itens>
                                <Styled.Itens xs={12} onClick={() => navigate("/") } style={{ borderBottom: "1px solid #8EB9D4", paddingBottom: "25px", cursor: "pointer" }}>
                                    <Styled.MenuItem container>
                                        <BiHelpCircle color="white" />
                                        Ajuda
                                    </Styled.MenuItem>
                                </Styled.Itens>
                            </>
                        }

                        <Styled.Itens xs={12} onClick={() => navigate("/dashboard")}>
                            <Styled.MenuItem container style={{ fontSize: "20px", fontWeight: "700", gap: theme.spacing(1.4) }}>
                                {nome}
                                <MdModeEditOutline color="white" style={{ cursor: 'pointer' }} />
                            </Styled.MenuItem>
                        </Styled.Itens>
                    </Grid>
                </Styled.Layout>
               
                    <Styled.BotaoSair onClick={() => { dispatch(logout()); navigate("/") }} size='medium'>
                        <RiLogoutBoxLine size={16} />
                        <p>Sair</p>
                    </Styled.BotaoSair>
        
            </Styled.SideBar>
        </>
    )
};