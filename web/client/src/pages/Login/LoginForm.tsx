import { FormControl } from "@mui/material";
import { useFormik } from "formik";
import { useLogin } from "../../api/controllers/autenticacao";
import { MainButton } from "../../components/MainButton";
import * as Styled from './Login.styled';
import * as Yup from 'yup'; //lib de validação
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToken } from "../../reducers/authentication";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    login: Yup.string().required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
  });

type FormValues = {
    login: string,
    senha: string,
  }

const LoginForm: React.FC = () => {
    const { data, mutateAsync } = useLogin();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function onSubmit(values: FormValues) {
        await mutateAsync({login: values.login, senha: values.senha});
    }

    useEffect(() => {
        if (data) {
            dispatch(setToken(data));
            navigate("/dashboard");
        }
    }, [data]);
    
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