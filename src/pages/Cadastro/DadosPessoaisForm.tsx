import {
  Checkbox,
  FormControl,
  Grid
} from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";
import BasicCard from '../../components/BasicCard';
import { MainButton } from "../../components/MainButton";
import { SecundaryButton } from "../../components/SecundaryButton";
import { theme } from "../../styles/theme";
import * as Styled from './Cadastro.styled';



const DadosPessoais: React.FC = () => {
  return (
    <div>
      <Styled.TituloCard variant="h5">Dados Pessoais</Styled.TituloCard>
      <BasicCard>
        <FormControl fullWidth>
          <Styled.Label variant="body1">Nome:</Styled.Label>
          <Styled.FormInput
            id="custom-css-outlined-input"
            variant="outlined"
            size="small"
          />
          <br />
          <Styled.Label variant="body1">Email:</Styled.Label>
          <Styled.FormInput
            type="email"
            id="custom-css-outlined-input"
            variant="outlined"
            size="small"
          />
          <br />
          <Styled.Label variant="body1">Senha:</Styled.Label>
          <Styled.FormInput
            type="password"
            id="custom-css-outlined-input"
            variant="outlined"
            size="small"
          />
          <br />
          <Styled.Label variant="body1">Confirmar senha:</Styled.Label>
          <Styled.FormInput
            type="password"
            id="custom-css-outlined-input"
            variant="outlined"
            size="small"
          />

          <Styled.TxtCadastro><Checkbox defaultChecked size="small" color='primary' />Concordo com os <Styled.CorLinkCad href="https://www.etecmcm.com.br" target="_blank">Termos de Serviço</Styled.CorLinkCad></Styled.TxtCadastro>

        </FormControl >
      </BasicCard>
      <Styled.Btn container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
          <SecundaryButton>
            <Styled.ArrowLeft/>
            Voltar
          </SecundaryButton>
        </Grid>

        <Grid item>
          <MainButton>
            Continuar
            <Styled.ArrowRight/>
          </MainButton>
        </Grid>
      </Styled.Btn>
    </div>
  )
}
export default DadosPessoais;