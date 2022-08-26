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
                    <FormControl>
                        <Styled.Label>Nome:</Styled.Label>
                        
                    </FormControl>
                </BasicCard>
            </form>
        </div>
    )
}
export default PagamentoForm;