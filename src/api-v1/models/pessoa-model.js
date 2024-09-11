import db from "../utils/db";



function insere(obj, callback) {

    db.pessoasDB.insert(obj, callback);

}

function lista(params, callback) {

    const objFake = [
        {
            "id": 5,
            "nome": "Francis Ford Copolla",
            "email": "coppola@hollywood.com",
            "telefone": "001-124-2111",
            "organizacao": null,
            "tags": [
                "cinema",
                "trabalho"
            ]
        }
    ];

    const err = null;
    
    callback(err, objFake);

}

function altera() {

}

function exclui() {

}

export default {
    insere,
    lista,
    altera,
    exclui
}