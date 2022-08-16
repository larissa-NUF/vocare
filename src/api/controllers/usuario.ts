import { useQuery } from 'react-query';
import { CustomError } from '../models/customError';
import { Usuario } from '../models/usuario';
import { api } from '../services/axios';

export const useGetAll = () => {
    return useQuery<Array<Usuario>, CustomError>(
        ["teste"],
        async () => {
            const { data } = await api.get(`/usuario/teste`);
            return data;
        }
    )
};