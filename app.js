require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const Produto = require('./src/model/Produto');
const routes = require('./routes');

const porta = process.env.PORTA;

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);

// const servicoProduto = require('./src/service/servicoProduto');

app.get('/', (req, res) => {
    res.send("Api de controle de produtos está em funcionamento!");
});

app.listen(porta, () => console.log(`Api rodando na porta ${porta}`));