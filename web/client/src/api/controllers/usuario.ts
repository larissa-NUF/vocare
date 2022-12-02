import { useMutation, useQuery } from '@tanstack/react-query';
import { CustomError } from '../models/customError';
import { Usuario } from '../models/usuario';
import { api } from '../services/axios';

export const useGetAll = () => {
    return useQuery<Usuario[], CustomError>(
        ["usuario"],
        async () => {
            const { data } = await api.get(`/usuario`);
            return data;
        }
    )
};

export const useCadastro = () => {
    return useMutation<void, CustomError, Usuario>(
        async (usuario) => {
            return api.post(`/usuario`, usuario);
        }
    )
}