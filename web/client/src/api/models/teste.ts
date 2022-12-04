export type Teste = {
    id?: number,
    dataCadastro?: Date,
    idUsuario: number,
    idPsicologo?: number
}

export type TesteReposta = {
    idTeste?: number,
    idPergunta: number,
    id?: number,
    resposta: string
}

export type TesteRequest = {
    teste: Teste,
    respostas: Array<TesteReposta>
}