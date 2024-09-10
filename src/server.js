import http from 'http';
import express from 'express'; // módulo que trata as requisições HTTP



// Iniciando a instância do express
const app = express();



// Funções de middleware,
// que interceptam requisições e respondem a requisição ou configuram para outras funções.
// Qualquer requisição que chegar na rota '/'.
app.all('/', (req, res, next) => res.send('Tudo funcionando!'));



// Porta que o servidor interpretará
const porta = 5500;

// Criando um novo interpretador na porta do novo servidor
http.createServer(app).listen(porta, () => {
    console.log(`Servidor pronto na porta ${porta}`);
});