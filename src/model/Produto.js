module.exports = class Produto {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obj.valor;
        this.quantidadeEstoque = obj.quantidadeEstoque;
        this.observacao = obj.observacao;
        this.foto = obj.foto;
        this.dataCadastro = obj.dataCadastro;
    }
}