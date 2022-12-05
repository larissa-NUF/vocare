import { useMutation, useQuery } from '@tanstack/react-query';
import { Consulta, ConsultaResponse } from '../models/consulta';
import { CustomError } from '../models/customError';
import { Usuario } from '../models/usuario';
import { api } from '../services/axios';
import { queryClient } from '../services/queryClient';

export const UseGetSolicitacoes = () => {
    return useQuery<Consulta[], CustomError>(
        ["solicitacoes"],
        async () => {
            const { data } = await api.get(`/consulta/solicitacoes`);
            return data;
        }
    )
};

export const useConsultaUpdate = () => {
    return useMutation<void, CustomError, Consulta>(
        async (consulta) => {
            return api.put(`/consulta`, consulta);
        }
    )
};

export const useGetConsultasByPsicologo = (id: number) => {
    return useQuery<ConsultaResponse[], CustomError>(
        ["usuarios"],
        async () => {
            if(id != 0){
            const { data } = await api.get(`/consulta/${id}`);
            return data;
            }
            
        }
    )
};

export const useInsertConsulta = () => {
    return useMutation<Consulta, CustomError, Consulta>(
        async (consulta) => {
            return await api.post(`/consulta`, consulta)
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["minhas-consultas"])
            }
        }
    )
}

export const useMinhasConsultas = (idCliente: number) => {
    return useQuery<Consulta[], CustomError>(
        ["minhas-consultas"],
        async () => {
            if(idCliente != 0){
                const { data } = await api.get(`/minhas-consultas/${idCliente}`);

                return data;
            }
        }
    )
}