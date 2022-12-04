import { useMutation } from "@tanstack/react-query"
import { CustomError } from "../models/customError"
import { TesteRequest } from "../models/teste"
import { api } from "../services/axios"

export const useEnviarTeste = () => {
    return useMutation<TesteRequest, CustomError, TesteRequest>(
        async (teste) =>{
            return await api.post(`/teste`, teste)  
        } 
    )
}