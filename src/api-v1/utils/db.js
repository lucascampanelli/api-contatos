import Nedb from "nedb";



// Instanciando o banco de dados
const pessoasDB = new Nedb();
const organizacoesDB = new Nedb();

export default {
    pessoasDB,
    organizacoesDB
}