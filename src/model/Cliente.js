
module.exports = class Cliente {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.cpfOuCnpj = obj.cpfOuCnpj;
        this.email = obj.email;
        this.telefone = obj.telefone;
        this.idUsuario = obj.idUsuario;
        this.dataCadastro = obj.dataCadastro;
        // this.enderecos = obj.enderecos && obj.enderecos.map(e => new Endereco(e))
    }
}

