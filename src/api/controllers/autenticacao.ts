import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { CustomError } from '../models/customError';
import { Usuario } from '../models/usuario';
import { api } from '../services/axios';

type UsuarioLogin ={
    login: string;
    senha: string;
}

export const useLogin = () => {
    return useMutation<Usuario, CustomError, UsuarioLogin>(
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