const Produto = require('../model/Produto');
var idAtual = 2;

var listaDeProdutos = [
    new Produto({
        id:1,
        nome:"Sapato",
        quantidadeEstoque: 10,
        valor: 200.0,
        dataCadastro: new Date().toISOString()
    }),
    new Produto({
        id:2,
        nome:"Camisa do Barcelona",
        quantidadeEstoque: 50,
        valor: 280.0,
        dataCadastro: new Date().toISOString()
    })
];

function obterTodos(){
    return listaDeProdutos;
}

function obterPorId(id){
    return listaDeProdutos.find(p => p.id == id);
}

function cadastrar(obj){
    var produto = new Produto(obj);
    idAtual++;
    produto.id = idAtual;
    listaDeProdutos.push(produto);

    return produto;
}

function atualizar(produto){
    var indice = listaDeProdutos.findIndex(p => p.id == produto.id);
    
    if(indice < 0){
        return;
    }

    listaDeProdutos.splice(indice, 1, produto);
}

function deletar(id){
    var indice = listaDeProdutos.findIndex(p => p.id == id);
    if(indice < 0){
        return;
    }

    // Deleta de dentro do array a posicição especifica
    listaDeProdutos.splice(indice, 1);
}


module.exports = {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}