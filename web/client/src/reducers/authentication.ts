import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Token } from '../api/models/token';
import { Usuario } from '../api/models/usuario';

type Auth = {
    perfil: string,
    isLogado: boolean,
    token: Token,
    user: Usuario
}

const initialState: Auth = {
    perfil: "Deslogado",
    isLogado: false,
    token: {
        accessToken: sessionStorage.getItem("token") || "",
        refreshToken: sessionStorage.getItem("refreshToken") || ""
    },
    user: {
        id: 0,
        email: "",
        login: "",
        nome: "",
        perfis: "",
        senha: "",
        id: 0
    }
}

const slice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setPerfil: (state, { payload }: PayloadAction<string>) => {
            state.perfil = payload;
        },
        setToken: (state, { payload }: PayloadAction<Token>) => {
            state.token.accessToken = payload.accessToken;
            state.token.refreshToken = payload.refreshToken;
            state.isLogado = true;

            sessionStorage.setItem("token", payload.accessToken);
            sessionStorage.setItem("refreshToken", payload.refreshToken);
        },
        setUser: (state, { payload }: PayloadAction<Usuario>) => {
            state.user = payload;
            if (payload.perfis === "1")
                state.perfil = "Admin";

            if (payload.perfis === "2")
                state.perfil = "Cliente";
            
            if (payload.perfis === "3")
                state.perfil = "Psicologo";
        },
        logout: (state) => {
            state.isLogado = initialState.isLogado;
            state.perfil = initialState.perfil;
            state.token.accessToken = "";
            state.token.refreshToken = "";
            state.user = initialState.user;

            localStorage.clear();
        }
    }
});

export const { setPerfil, setToken, setUser, logout } = slice.actions;

export default slice.reducer;

export const getPerfil = (state: RootState) => state.authentication.perfil;
export const getToken = (state: RootState) => state.authentication.token;
export const getUser = (state: RootState) => state.authentication.user;