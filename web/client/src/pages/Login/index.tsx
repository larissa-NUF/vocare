import { Grid } from "@mui/material";
import * as Styled from "./Login.styled";
import React from "react";
import Logo from "../../assets/img/logo-completo.png";
import LoginForm from "./LoginForm";


const Login: React.FC = () => {

    return (
        <div>
            <Grid container>
                <Styled.GridLogo item xs={5} justifyContent="center">
                    <Styled.Logo src={Logo} />
                </Styled.GridLogo>
                <Grid item xs={7}>
                    <Styled.FundoAzul>
                        <Styled.GridLogo>
                        <LoginForm />
                        </Styled.GridLogo>
                    </Styled.FundoAzul>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;
