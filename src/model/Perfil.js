module.exports = class Perfil {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.descricao = obj.descricao;
    }
}

