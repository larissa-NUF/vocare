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

export const useGetById = (id: number) => {
    return useQuery<Usuario, CustomError>(
        ["usuarios"],
        async () => {
            if(id != 0){
            const { data } = await api.get(`/usuario/${id}`);
            return data;
            }
            
        }
    )
};

export const useGetByPerfil = (perfil: string) => {
    return useQuery<Usuario[], CustomError>(
        ["usuariosPerfil"],
        async () => {
            const { data } = await api.get(`/usuario/perfil/${perfil}`);
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

export const useUsuarioUpdate = () => {
    return useMutation<void, CustomError, Usuario>(
        async (usuario) => {
            return api.put(`/usuario`, usuario);
        }
    )
}

export const useUsuarioDelete = () => {
    return useMutation<void, CustomError, number>(
        async (id) => {
            return api.delete(`/usuario/${id}`);
        }
    )
}