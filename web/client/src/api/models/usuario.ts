export type Usuario = {
    id?: number,
    nome: string,
    login: string,
    senha: string,
    tipo: string,
    dataCadastro?: Date,
    dataAtualizacao?: Date
}