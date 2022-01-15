
const serviceUsuario = require('../service/servicoUsuario');

module.exports = class UsuarioController {
    async login(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res
                .status(401)
                .json({
                    mensagem: "E-mail ou senha inválidos.",
                    name: "Autenticacao"
                });
        }

        try {
            var usuarioAutenticado = await serviceUsuario.validarUsuario(email, senha);
            return res.json(usuarioAutenticado);

        } catch (error) {
            console.log(error);
            return res.status(401).json({ mensagem:error.message })
        }
    }

    async logout(req, res) {
        try {
            var deslogado = await serviceUsuario.deslogarUsuario(req.headers.authorization);

            if (deslogado) {
                return res
                    .status(200)
                    .json({ mensagem: "Logout efetuado com sucesso!" });
            }

            return res
                .status(400)
                .json({ mensagem: "Usuário não estava logado." });

        } catch (error) {
            console.log(error);
            return res.status(400).json({ mensagem:error.message })
        }
    }

    async obterTodos(req, res) {
        try {
            let produtos = serviceUsuario.obterTodos();
            return res.json(produtos);
        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }

    async obterPorId(req, res) {
        try {
            var id = req.params.id;

            let produto = serviceUsuario.obterPorId(id);
            return res.json(produto);

        } catch (error) {
            console.log(error);
            return res.json({ mensagem:error.message })
        }
    }
}