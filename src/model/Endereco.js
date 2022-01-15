module.exports = class Endereco {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.cep = obj.cep;
        this.rua = obj.rua;
        this.numero = obj.numero;
        this.bairro = obj.bairro;
        this.cidade = obj.cidade;
        this.complemento = obj.complemento;
    }
}