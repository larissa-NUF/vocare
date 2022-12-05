export type Consulta = {
    id?: number;
    idCliente: number,
    idPsicologo?: number,
    dataCadastro?: Date,
    dataConsulta: Date,
    Aceita?: boolean,
    finalizada?: boolean,
    idSala?: string
}

export type ConsultaResponse = Consulta & {
    nome: string, 
    email: string
}