import {
  Checkbox,
  FormControl,
  Grid,
  Link
} from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import BasicCard from '../../components/basicCard';
import { MainButton } from "../../components/MainButton";
import { SecundaryButton } from "../../components/SecundaryButton";
import { theme } from "../../styles/theme";
import * as Styled from './Cadastro.styled';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useCadastro } from "../../api/controllers/usuario";
import { useEffect } from "react";
import { useLogin } from "../../api/controllers/autenticacao";
import { useDispatch } from "react-redux";
import { setToken } from "../../reducers/authentication";

const validationSchema = Yup.object().shape({
  checkbox: Yup.boolean().required().oneOf([true], "Aceite nossos termos!"),
  nome: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email().required("Campo obrigatório"),
  senha: Yup.string().required("Campo obrigatório"),
  confirmarSenha: Yup.string().required("Campo obrigatório")
  .oneOf([Yup.ref('senha'), null], "As senhas precisam ser iguais!")
});

type FormValues = {
  checkbox: boolean,
  nome: string,
  email: string,
  senha: string,
  confirmarSenha: string
}


const DadosPessoais: React.FC = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const { mutateAsync, error } = useCadastro();

  const { data, mutateAsync: loginAsync } = useLogin();

  async function onSubmit(valuesSubmit: FormValues) {
    await mutateAsync({
      nome: valuesSubmit.nome,
      senha: valuesSubmit.senha,
      login: valuesSubmit.email,
      perfis: "2",
      email: valuesSubmit.email 
    });

    await loginAsync({
      login: valuesSubmit.email,
      senha: valuesSubmit.email
    });

    resetForm();
  }

  useEffect(() => {
    if (data) {
      dispatch(setToken(data));
      navigate("/dashboard");
    }
  }, [data]);

  useEffect(() => {
    console.log(error?.message)
  }, [error])

  const initialValues: FormValues = {
    checkbox: false, nome: "", email: "", senha: "", confirmarSenha: ""
  }

  const { handleSubmit, handleChange, handleBlur, values, errors, resetForm, touched } = useFormik({
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
          {touched.nome && errors.nome}
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
          {touched.email && errors.email}
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
          {touched.senha && errors.senha}
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
          {touched.confirmarSenha && errors.confirmarSenha}

          <Styled.DivCadastro>
            <Styled.TxtCadastro>
              <Checkbox 
                value={values.checkbox} 
                size="small" 
                style={{ color: theme.palette.primary.main }} 
                name="checkbox" 
                id="checkbox" 
                onChange={handleChange} 
                onBlur={handleBlur} 
              />
              Concordo com os <Styled.CorLinkCad href="https://www.etecmcm.com.br" target="_blank">Termos de Serviço</Styled.CorLinkCad>
            </Styled.TxtCadastro>
            {touched.checkbox && errors.checkbox}
            
            <Styled.Txt>Já possui uma conta? <Styled.CorLink href="/login">Faça Login!</Styled.CorLink></Styled.Txt>
          </Styled.DivCadastro>

        </FormControl >
      </BasicCard>
      <Styled.Btn container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
          <Link href="/login" style={{textDecoration: "none"}}>
            <SecundaryButton>
              <Styled.ArrowLeft />
              <Styled.TxtBtnVoltar>Voltar</Styled.TxtBtnVoltar>
            </SecundaryButton>
          </Link>
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