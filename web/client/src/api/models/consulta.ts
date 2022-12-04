export type Consulta = {
    id?: number;
    idCliente: number,
    idPsicologo?: number,
    nome: string,
    dataCadastro: Date,
    dataConsulta: Date,
    Aceita?: boolean,
    finalizada?: boolean,
    idSala?: string
}