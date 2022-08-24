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
import * as Yup from 'yup'; //lib de validação -> checkbox
import { Formik, useFormik, validateYupSchema } from "formik";

const validationSchema = Yup.object().shape({
  checkbox: Yup.boolean()
    .required('É necessário concordar com os Termos de Uso'),
});

type FormValues = {
  checkbox: boolean
}

const DadosPessoais: React.FC = () => {

  async function onSubmit(values: FormValues) {
    console.log(values)
  }

  const initialValues: FormValues = {
    checkbox: false
  }

  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <form onSubmit={handleSubmit}>
      <Styled.TituloCard variant="h5">Dados Pessoais</Styled.TituloCard>
      <BasicCard>
        <FormControl fullWidth>
          {/* <Styled.Label variant="body1">Nome:</Styled.Label>
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
          /> */}

          <Styled.DivCadastro>
            <Styled.TxtCadastro>
              <Checkbox value={values.checkbox} size="small" style={{ color: theme.palette.primary.main }} name="checkbox" id="checkbox" onChange={handleChange} onBlur={handleBlur} />Concordo com os 
              <Styled.CorLinkCad href="https://www.etecmcm.com.br" target="_blank">Termos de Serviço
              </Styled.CorLinkCad>
              </Styled.TxtCadastro>
          </Styled.DivCadastro>

        </FormControl >
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
            <button type="submit">OSNOIASND</button>
          </MainButton>
        </Grid>
      </Styled.Btn>
    </form>
  )
}
export default DadosPessoais;