import { FormControl, Grid } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicCard from '../../components/basicCard';
import { MainButton } from "../../components/MainButton";
import { SecundaryButton } from "../../components/SecundaryButton";
import * as Styled from './Pagamento.styled';

const PagamentoForm: React.FC = () => {

    return (
        <div>
            <form>
                <Styled.TituloPag variant="h5">Dados de Pagamento</Styled.TituloPag>
                <BasicCard>
                    <FormControl fullWidth>
                        <Styled.Label>Títular:</Styled.Label>
                        <Styled.FormInput
                            type="text"
                            variant="outlined"
                            size="small"
                            id="titular"
                        />
                        <br />
                        <Styled.Label variant="body1">N° do Cartão:</Styled.Label>
                        <Styled.FormInput
                            type="number"
                            variant="outlined"
                            size="small"
                            id="numeroCartao"
                        />
                        <br />
                        <Grid>
                            <Grid style={{justifyContent:"space-between"}} container>
                                <Styled.GridItem item xs={5}>
                                    <Styled.Label variant="body1">Vencimento:</Styled.Label>
                                    <Styled.FormPag
                                        type="date"
                                        variant="outlined"
                                        size="small"
                                        id="vencimento"
                                    />
                                </Styled.GridItem>
                                <Styled.GridItem item xs={5}>
                                    <Styled.Label variant="body1">CVV:</Styled.Label>
                                    <Styled.FormPag
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        id="cvv"
                                    />
                                </Styled.GridItem>
                            </Grid>
                        </Grid>
                    </FormControl>
                </BasicCard>

                <Styled.Btn container alignItems="center" justifyContent="center" spacing={2}>
                    <Grid item>
                        <SecundaryButton>
                            <Styled.ArrowLeft />
                            Voltar
                        </SecundaryButton>
                    </Grid>

                    <Grid item>
                        <MainButton>
                            Continuar
                            <Styled.ArrowRight />
                        </MainButton>
                    </Grid>
                </Styled.Btn>
            </form>
        </div>
    )
}
export default PagamentoForm;