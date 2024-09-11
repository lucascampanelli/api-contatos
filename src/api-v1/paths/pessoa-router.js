import express from 'express';
import pessoaModel from '../models/pessoa-model';



const pessoaRouter = express.Router();

// pessoaRouter.use('/', (req, res, next) => res.send('ENDPOINT PESSOA'));
pessoaRouter.get('/', listarPessoas);
pessoaRouter.post('/', inserePessoas);



function listarPessoas(req, res, next) {

    pessoaModel.lista({}, (err, lista) => {

        if(!err)
            res.json(lista);

        else
            res.status(400).send(err.message);

    })

}

function inserePessoas(req, res, next) {

    pessoaModel.insere(req.body, (err, objNovo) => {

        if(!err)
            res.json(objNovo);

        else
            res.status(400).send(err.message);

    })

}



export default pessoaRouter;