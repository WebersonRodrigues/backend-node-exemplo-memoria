
const Produto = require('../model/Produto');
const serviceProduto = require('../service/servicoProduto');

module.exports = class ProdutoController {
    
    async obterTodos(req, res) {
        try {
            let produtos = serviceProduto.obterTodos();
            return res.json(produtos);
        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }
    
    async obterPorId(req, res) {
        try {
            var id = req.params.id;

            let produto = serviceProduto.obterPorId(id);
            return res.json(produto);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }

    async cadastrar(req, res) {
        try {           
            let produto = serviceProduto.cadastrar(req.body);
            return res.json(produto);
            
        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }

    async atualizar(req, res) {
        try {
            var id = req.params.id;
            var produto = req.body || {};

            produto.id = parseInt(id);

            let produtoAtualizado = serviceProduto.atualizar(produto);
            return res.json(produtoAtualizado);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }

    async deletar(req, res) {
        try {
            var id = req.params.id;
            let produtoAtualizado = serviceProduto.deletar(id);
            return res.json(produtoAtualizado);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }
}