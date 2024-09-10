import http from 'http';
import express from 'express'; // módulo que trata as requisições HTTP



// Iniciando a instância do express
const app = express();



// Funções de middleware,
// que interceptam requisições e respondem a requisição ou configuram para outras funções.
app.get('/doc', (req, res, next) => res.send('Documentação da aplicação!'));

app.get('/api/v1', (req, res, next) => res.send('API V1 no ar!'));



// Porta que o servidor interpretará
const porta = 5500;

// Criando um novo interpretador na porta do novo servidor
http.createServer(app).listen(porta, () => {
    console.log(`Servidor pronto na porta ${porta}`);
});