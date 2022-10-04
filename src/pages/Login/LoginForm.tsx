import { FormControl, Grid, Link } from "@material-ui/core";
import * as React from "react";
import BasicCard from '../../components/basicCard';
import { MainButton } from "../../components/MainButton";
import { SecundaryButton } from "../../components/SecundaryButton";
import * as Styled from './Login.styled';



const LoginForm: React.FC = () => {
    return (
        <div>
            <Styled.CardLogin>
                <Styled.TituloCard variant="h5">Login</Styled.TituloCard>
                <FormControl fullWidth>
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

                    <Styled.DivBtn>
                        <Styled.Btn>
                            Entrar
                        </Styled.Btn>
                    </Styled.DivBtn>

                    <Styled.Txt>Não possui conta? <Styled.CorLink href="/cadastro">Cadastre-se!</Styled.CorLink></Styled.Txt>
                </FormControl>
            </Styled.CardLogin>
        </div>
    )
}
export default LoginForm;