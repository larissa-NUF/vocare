import { FormControl, Grid, Link } from "@material-ui/core";
import { useFormik } from "formik";
import * as React from "react";
import { useLogin } from "../../api/controllers/autenticacao";
import BasicCard from '../../components/basicCard';
import { MainButton } from "../../components/MainButton";
import { SecundaryButton } from "../../components/SecundaryButton";
import * as Styled from './Login.styled';
import * as Yup from 'yup'; //lib de validação

const validationSchema = Yup.object().shape({
    login: Yup.string().required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
  });

type FormValues = {
    login: string,
    senha: string,
  }

const LoginForm: React.FC = () => {
    const {data, mutate} = useLogin();

    async function onSubmit(values: FormValues) {
        console.log(values);
        mutate({login: values.login, senha: values.senha});
    }
    
    const initialValues: FormValues = {
        login: "", 
        senha: ""
    };
    
    const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <form onSubmit={handleSubmit}>
            <Styled.CardLogin>
                <Styled.TituloCard variant="h5">Login</Styled.TituloCard>
                <FormControl fullWidth>
                <Styled.Label variant="body1">Login:</Styled.Label>
                <Styled.FormInput
                    type="login"
                    variant="outlined"
                    size="small"
                    id="login"
                    value={values.login}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.login}
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

                    <Styled.DivBtn>
                        
                        <MainButton type="submit">
                            Continuar
                           
                        </MainButton>
                    </Styled.DivBtn>

                    <Styled.Txt>Não possui conta? <Styled.CorLink href="/cadastro">Cadastre-se!</Styled.CorLink></Styled.Txt>
                </FormControl>
            </Styled.CardLogin>
        </form>
    )
}
export default LoginForm;