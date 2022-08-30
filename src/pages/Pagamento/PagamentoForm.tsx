import { FormControl, Grid, Link } from "@material-ui/core";
import * as React from "react";
import BasicCard from '../../components/BasicCard';
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
                            <Grid container>
                                <Styled.GridItem item xs={6}>
                                    <Styled.Label variant="body1">Vencimento:</Styled.Label>
                                    <Styled.FormPag
                                        type="date"
                                        variant="outlined"
                                        size="small"
                                        id="vencimento"
                                    />
                                </Styled.GridItem>
                                <Styled.GridItem item xs={6}>
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
                        <MainButton type="submit">
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