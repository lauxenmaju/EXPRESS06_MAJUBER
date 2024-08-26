//aprimorar a apresentação dos resultados

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const mysql_config =require('./mysql_config');
const functions = require('./function');

const app = express()
app.listen(3000, ()=>{
    comsole.log('Servidor no ar');
})

//mysql connection
const connection = mysql.createConnection(mysql_config);

//criar uma função que irá parametrizar as respostas do api
//para atuaçlizar todos os endpoints vamos uma função para isso

//criando roteamento 

//consumindo cors
app.use(cors());

app.get('/',(req,res)=>{
    //estabelecer conexão para executar a query
    //vamos consumir a function criada
    connection.query('SELECT * FROM tasks',(err,results)=>{
        if(err){
            res.json(functions.response('error','Erro: '+err.message));
        }else{
            res.json(functions.response('sucess', "tasks listadas com sucesso", results ));
        }
    })
})

