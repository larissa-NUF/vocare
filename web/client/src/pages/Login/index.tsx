import { Grid } from "@mui/material";
import * as Styled from "./Login.styled";
import React, { useEffect } from "react";
import Logo from "../../assets/img/logo-completo.png";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { setHeader } from "../../reducers/authentication";


const Login: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader(true))
    }, []);

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
