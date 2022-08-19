import {
    FormControl,
    Grid
} from "@material-ui/core";
import * as React from "react";
import BasicCard from '../../components/BasicCard';
import { MainButton } from "../../components/MainButton";
import { SecundaryButton } from "../../components/SecundaryButton";
import * as Styled from './Login.styled';



const LoginForm: React.FC = () => {
    return (
        <div>
            <BasicCard>
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
                </FormControl>
            </BasicCard>
        </div>
    )
}
export default LoginForm;