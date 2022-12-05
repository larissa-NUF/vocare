import { useMutation, useQuery } from '@tanstack/react-query';
import { Consulta } from '../models/consulta';
import { CustomError } from '../models/customError';
import { Usuario } from '../models/usuario';
import { api } from '../services/axios';

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
    return useQuery<Consulta[], CustomError>(
        ["consulta", id],
        async () => {
            if(id != 0){
            const { data } = await api.get(`/consulta/${id}`);
            return data;
            }
            
        }
    )
};

export const useGetConsultasByData = () => {
    return useMutation<Consulta[], CustomError, {id: number, date: Date}>(
        async (obj) => {
            if(obj.id != 0){
            const { data } = await api.post(`/consulta/data`, {Id: obj.id, DataConsulta: obj.date});
            return data;
            }
            
        }
    )
};
