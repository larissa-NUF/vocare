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
import * as Yup from 'yup'; //lib de validação
import { Formik, useFormik, validateYupSchema } from "formik";

const validationSchema = Yup.object().shape({
  checkbox: Yup.boolean(),
  nome: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email().required("Campo obrigatório"),
  senha: Yup.string().required("Campo obrigatório"),
  confirmarSenha: Yup.string().required("Campo obrigatório")
});

type FormValues = {
  checkbox: boolean,
  nome: string,
  email: string,
  senha: string,
  confirmarSenha: string
}

const DadosPessoais: React.FC = () => {

  async function onSubmit(values: FormValues) {
    console.log(values)
  }

  const initialValues: FormValues = {
    checkbox: false, nome: "", email: "", senha: "", confirmarSenha: ""
  }

  const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  return (
    <form onSubmit={handleSubmit}>
      <Styled.TituloCard variant="h5">Dados Pessoais</Styled.TituloCard>
      <BasicCard>
        <FormControl fullWidth>
          <Styled.Label variant="body1">Nome:</Styled.Label>
          <Styled.FormInput
            variant="outlined"
            size="small"
            id="nome"
            value={values.nome}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.nome}
          <br />
          <Styled.Label variant="body1">Email:</Styled.Label>
          <Styled.FormInput
            type="email"
            variant="outlined"
            size="small"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email}
          <br />
          <Styled.Label variant="body1">Senha:</Styled.Label>
          <Styled.FormInput
            type="password"
            variant="outlined"
            size="small"
            id="senha"
            value={values.senha}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.senha}
          <br />
          <Styled.Label variant="body1">Confirmar senha:</Styled.Label>
          <Styled.FormInput
            type="password"
            variant="outlined"
            size="small"
            id="confirmarSenha"
            value={values.confirmarSenha}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmarSenha}

          <Styled.DivCadastro>
            <Styled.TxtCadastro>
              <Checkbox value={values.checkbox} size="small" style={{ color: theme.palette.primary.main }} name="checkbox" id="checkbox" onChange={handleChange} onBlur={handleBlur} />Concordo com os <Styled.CorLinkCad href="https://www.etecmcm.com.br" target="_blank">Termos de Serviço</Styled.CorLinkCad>
              </Styled.TxtCadastro>
          </Styled.DivCadastro>

        </FormControl >
      </BasicCard>
      <Styled.Btn container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
          <SecundaryButton>
            <Styled.ArrowLeft />
            <Styled.TxtBtnVoltar>Voltar</Styled.TxtBtnVoltar>
          </SecundaryButton>
        </Grid>

        <Grid item>
          <MainButton type="submit">
            <Styled.TxtBtn>Continuar</Styled.TxtBtn>
            <Styled.ArrowRight />
          </MainButton>
        </Grid>
      </Styled.Btn>
    </form>
  )
}
export default DadosPessoais;