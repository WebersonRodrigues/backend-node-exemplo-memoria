
const serviceCliente = require('../service/servicoCliente');

module.exports = class ClienteController {
    
    async obterTodos(req, res) {
        try {
            let clientes = serviceCliente.obterTodos();
            return res.json(clientes);
        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message });
        }
    }
    
    async obterPorId(req, res) {
        try {
            var id = req.params.id;

            let cliente = serviceCliente.obterPorId(id);
            return res.json(cliente);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message });
        }
    }

    async cadastrar(req, res) {
        try {           
            let cliente = serviceCliente.cadastrar(req.body);
            return res.json(cliente);
            
        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message });
        }
    }

    async atualizar(req, res) {
        try {
            var id = req.params.id;
            var cliente = req.body || {};

            cliente.id = parseInt(id);

            let clienteAtualizado = serviceCliente.atualizar(cliente);
            return res.json(clienteAtualizado);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message });
        }
    }
    
    async deletar(req, res) {
        try {
            var id = req.params.id;
            serviceCliente.deletar(id);
            return res.json({mensagem: `Cliente com id ${id} foi deletado com sucesso`});

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message });
        }
    }
}