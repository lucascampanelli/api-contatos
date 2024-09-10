import express from 'express';



const organizacaoRouter = express.Router();

organizacaoRouter.use('/', (req, res, next) => res.send('ENDPOINT ORGANIZAÇÃO'));

export default organizacaoRouter;