import express from 'express';
import { validate } from 'jsonschema'; // módulo que faz a validação de um JSON baseado em um schema
import pessoaModel from '../models/pessoa-model';
import { pessoaSchema } from '../models/schemas';



const pessoaRouter = express.Router();



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

    // Validação do documento JSON recebido
    let result = validate(req.body, pessoaSchema);

    if(result?.errors?.length > 0)
        res.status(400).send("Erro no formato do objeto JSON.");

    pessoaModel.insere(req.body, (err, objNovo) => {

        if(!err)
            res.json(objNovo);

        else
            res.status(400).send(err.message);

    })

}



export default pessoaRouter;