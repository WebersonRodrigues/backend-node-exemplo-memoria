require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const porta = process.env.PORTA || 3000;

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);

app.get('/', (req, res) => {
    res.send("Api de controle de produtos está em funcionamento!");
});

app.listen(porta, () => console.log(`Api rodando na porta ${porta}`));