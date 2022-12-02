import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { CustomError } from '../models/customError';
import { Token } from '../models/token';
import { Usuario } from '../models/usuario';
import { api } from '../services/axios';

type UsuarioLogin ={
    login: string;
    senha: string;
}

export const useLogin = () => {
    return useMutation<Token, CustomError, UsuarioLogin>(
        ["login"],
        async (login) => {
            const { data } = await api.post(`/autenticacao`, login);
            return data;
        },
        {
            onError(err) {
                toast.error(err.response?.data.message, {
                    toastId: "login_erro",
                });
            },
        }
    )
};

export const useValidacao = () => {
    return useMutation<Usuario, CustomError, Token>(
        ["validar"],
        async (token) => {
            const { data } = await api.post(`/autenticacao/credenciais`, token);

            return data;
        }
    )
}