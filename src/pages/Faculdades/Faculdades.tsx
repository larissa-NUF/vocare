import * as React from 'react';
import * as Styled from "./Faculdades.styled"
import { theme } from '../../styles/theme';
import { Grid } from '@mui/material';
import { useGetAll } from '../../api/controllers/usuario';
import Logo from "../../assets/img/logo-branco.png";
import { FaUserGraduate as Fa } from 'react-icons/fa';
import { TiLocation as Ti } from 'react-icons/ti';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';

let map: google.maps.Map;
let service: google.maps.places.PlacesService;
let infowindow: google.maps.InfoWindow;

export const Faculdades: React.FC = () => {
    const sydney = new google.maps.LatLng(0.0, 0.0);
  
    infowindow = new google.maps.InfoWindow();
  
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: sydney,
      zoom: 15
    });
  
    var request2 = {
      query: "rio de janeiro"
    };
  
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request2, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("----------", results);
      }
    });
   
  

    return (
        <div>
            <Styled.Fundo></Styled.Fundo>
            <Styled.Container>
                <Styled.Titulo><Styled.Icon />Faculdades</Styled.Titulo>
                <Styled.Pesquisa><BiSearchAlt />Pesquisar</Styled.Pesquisa>
                <Styled.GridFaculdades xs={12}>
                    <Styled.Conteudo xs={8} >  
                        <div style={{ display:"flex", borderBottom:"1px #8EB9D4 solid", paddingBottom: "16px" }}>
                            <Grid xs={2}>
                                <div style={{ height: "105px", width: "105px", backgroundColor: "#D9D9D9", border: "1px solid #ededed", position: "relative" }}></div>
                            </Grid>
                            <Grid xs={10}>
                                <Styled.Legenda>Uniasselvi</Styled.Legenda>
                                <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "21px" }}>Nota iMEC: 3.1</p>
                                <p style={{ fontSize: "14px", lineHeight: "21px", marginTop: "22px" }}>R. Platina, 556 - Tatuape, São Paulo - SP, 03308-010</p>
                            </Grid>
                        </div>

                        <div style={{ display:"flex", borderBottom:"1px #8EB9D4 solid", paddingBottom: "16px" }}>
                            <Grid xs={2}>
                                <div style={{ height: "105px", width: "105px", backgroundColor: "#D9D9D9", border: "1px solid #ededed", position: "relative" }}></div>
                            </Grid>
                            <Grid xs={10}>
                                <Styled.Legenda>Uniasselvi</Styled.Legenda>
                                <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "21px" }}>Nota iMEC: 3.1</p>
                                <p style={{ fontSize: "14px", lineHeight: "21px", marginTop: "22px" }}>R. Platina, 556 - Tatuape, São Paulo - SP, 03308-010</p>
                            </Grid>
                        </div>

                        <div style={{ display:"flex", borderBottom:"1px #8EB9D4 solid", paddingBottom: "16px" }}>
                            <Grid xs={2}>
                                <div style={{ height: "105px", width: "105px", backgroundColor: "#D9D9D9", border: "1px solid #ededed", position: "relative" }}></div>
                            </Grid>
                            <Grid xs={10}>
                                <Styled.Legenda>Uniasselvi</Styled.Legenda>
                                <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "21px" }}>Nota iMEC: 3.1</p>
                                <p style={{ fontSize: "14px", lineHeight: "21px", marginTop: "22px" }}>R. Platina, 556 - Tatuape, São Paulo - SP, 03308-010</p>
                            </Grid>
                        </div>

                        <div style={{ display:"flex", borderBottom:"1px #8EB9D4 solid", paddingBottom: "16px" }}>
                            <Grid xs={2}>
                                <div style={{ height: "105px", width: "105px", backgroundColor: "#D9D9D9", border: "1px solid #ededed", position: "relative" }}></div>
                            </Grid>
                            <Grid xs={10}>
                                <Styled.Legenda>Uniasselvi</Styled.Legenda>
                                <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "21px" }}>Nota iMEC: 3.1</p>
                                <p style={{ fontSize: "14px", lineHeight: "21px", marginTop: "22px" }}>R. Platina, 556 - Tatuape, São Paulo - SP, 03308-010</p>
                            </Grid>
                        </div>

                        <div style={{ display:"flex", borderBottom:"1px #8EB9D4 solid", paddingBottom: "16px" }}>
                            <Grid xs={2}>
                                <div style={{ height: "105px", width: "105px", backgroundColor: "#D9D9D9", border: "1px solid #ededed", position: "relative" }}></div>
                            </Grid>
                            <Grid xs={10}>
                                <Styled.Legenda>Uniasselvi</Styled.Legenda>
                                <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "21px" }}>Nota iMEC: 3.1</p>
                                <p style={{ fontSize: "14px", lineHeight: "21px", marginTop: "22px" }}>R. Platina, 556 - Tatuape, São Paulo - SP, 03308-010</p>
                            </Grid>
                        </div>

                        <div style={{ display:"flex", borderBottom:"1px #8EB9D4 solid", paddingBottom: "16px" }}>
                            <Grid xs={2}>
                                <div style={{ height: "105px", width: "105px", backgroundColor: "#D9D9D9", border: "1px solid #ededed", position: "relative" }}></div>
                            </Grid>
                            <Grid xs={10}>
                                <Styled.Legenda>Uniasselvi</Styled.Legenda>
                                <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "21px" }}>Nota iMEC: 3.1</p>
                                <p style={{ fontSize: "14px", lineHeight: "21px", marginTop: "22px" }}>R. Platina, 556 - Tatuape, São Paulo - SP, 03308-010</p>
                            </Grid>
                        </div>
                    </Styled.Conteudo>
                    <Styled.Card xs={4}>
                        <Grid style={{ marginLeft: "auto", marginRight:"auto" }}>
                            <div style={{ height: theme.spacing(14), width: theme.spacing(14), backgroundColor: "#D9D9D9", display: "flex", marginBottom:"8px" }}></div>
                            <div>
                                <Styled.Legenda>Uniasselvi</Styled.Legenda>
                            </div>
                            <p style={{ fontSize: "14px", fontWeight: "bold", lineHeight: "21px", borderBottom: "1px #8EB9D4 solid", paddingBottom: "8px" }}>Nota iMEC: 3.1</p>


                            <Styled.ItensCard style={{ marginTop: "12px" }}>
                                <Ti style={{ fill: theme.palette.primary.main, height: "16px", width:"16px"}}/>
                                <div>
                                    <Styled.TxtCard>
                                        R. Platina, 556 - Tatuape,
                                    </Styled.TxtCard>
                                    <Styled.TxtCard>
                                        São Paulo - SP, 03308-010
                                    </Styled.TxtCard>
                                </div>
                            </Styled.ItensCard>
                            <Styled.ItensCard>
                                <BsFillTelephoneFill style={{ fill: theme.palette.primary.main, height: "16px", width:"16px" }} /><Styled.TxtCard>011994003551</Styled.TxtCard>
                            </Styled.ItensCard>
                            <Styled.ItensCard>
                                <AiOutlineLink style={{ fill: theme.palette.primary.main, height: "16px", width:"16px" }} /><Styled.TxtCard><a href='https://uniasselvi.business'>https://uniasselvi.business</a></Styled.TxtCard>
                            </Styled.ItensCard>
                        </Grid>
                    </Styled.Card>
                </Styled.GridFaculdades>
                
            </Styled.Container>
        </div>
    )
}