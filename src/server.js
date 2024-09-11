import express from 'express'; // módulo que trata as requisições HTTP
import http from 'http';
import apiRouter from './api-v1/api-router';
import bodyParser from 'body-parser'; // módulo que faz a validação da requisição





// Iniciando a instância do express
const app = express();



// Associar o JSON (caso exista) ao objeto req.body para qualquer rota que seja acionada
app.use(bodyParser.json());

// Tratar a query string sem utilizar o tratamento extendido.
// Associa os parâmetros ao objeto req.params
app.use(bodyParser.urlencoded({ extended: false }))



// Uma mini aplicação é um router.
// Um router trata as requisições e direciona para o processamento correto.
// O "Use" intercepta qualquer tipo de requisição e encaminha para a próxima, caso nenhuma seja compatível
app.use('api/v1', apiRouter);
app.use('/', (req, res) => res.send('-- API Contatos --'));



// Porta que o servidor interpretará
const porta = 5500;

// Criando um novo interpretador na porta do novo servidor
http.createServer(app).listen(porta, () => {
    console.log(`Servidor pronto na porta ${porta}`);
});