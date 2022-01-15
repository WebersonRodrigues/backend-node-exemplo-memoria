const express = require("express");
const routes = express.Router();

const usuarioService = require('./src/service/servicoUsuario');
const UsuarioController = require('./src/controllers/UsuarioController');
const ClienteController = require('./src/controllers/ClienteController');
const ProdutoController = require('./src/controllers/ProdutoController');

const usuarioController = new UsuarioController();
const clienteController = new ClienteController();
const produtoController = new ProdutoController();

routes.use(async (req, res, next) => {

    if(process.env.AUTENTICAR =="TRUE"){

        let { authorization } = req.headers;
        let autenticado = await usuarioService.validarAutenticacao(authorization);
      
        if(req.originalUrl != '/login' && !autenticado ) {
            return res.status(401).json({ mensagem:"Por segurança o seu login de acesso expirou, efetue-o novamente." })
        }
    }

    next();
});

//produto
routes.get("/produtos", produtoController.obterTodos);
routes.get("/produtos/:id", produtoController.obterPorId);
routes.post('/produtos', produtoController.cadastrar);
routes.put("/produtos/:id", produtoController.atualizar);
routes.delete("/produtos/:id", produtoController.deletar);

//cliente
routes.get("/clientes", clienteController.obterTodos);
routes.get("/clientes/:id", clienteController.obterPorId);
routes.post('/clientes', clienteController.cadastrar);
routes.put("/clientes/:id", clienteController.atualizar);
routes.delete("/clientes/:id", clienteController.deletar);

//usuario
routes.get("/usuarios", usuarioController.obterTodos);
routes.get("/usuarios/:id", usuarioController.obterPorId);
routes.post("/login", usuarioController.login);
routes.delete("/logout", usuarioController.logout);

module.exports = routes;