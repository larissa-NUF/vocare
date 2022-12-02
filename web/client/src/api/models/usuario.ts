export type Usuario = {
    id?: number,
    nome: string,
    email: string,
    login: string,
    senha: string,
    perfis: string,
    dataCadastro?: Date,
    dataAtualizacao?: Date
}