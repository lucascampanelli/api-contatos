import express from "express";
import pessoaRouter from "./paths/pessoa-router";
import organizacaoRouter from "./paths/organizacao-router";



// Criando uma nova instância do Router do express
const apiRouter = express.Router();

// Qualquer rota a partir de '/Pessoas' passará por aqui. Senão, será transferido para a próxima.
apiRouter.use('/organizacoes', organizacaoRouter);

// Qualquer rota a partir de '/Pessoas' passará por aqui. Senão, será transferido para a próxima.
apiRouter.use('/pessoas', pessoaRouter);

// Tudo que chegar nessa requisição, será informada a versão da API
apiRouter.use('/', (req, res, next) => res.send('API V1'));

export default apiRouter;