const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo");
})

app.get("/produto", function(req, res){
    res.send("produto");
})

app.get("/produto/:id", function(req, res){
    res.status(404).send({
        title: 'NodeJs Express Api',
        version: "0.0.1"
    })
})
app.get("/sobre", function(req, res){
    res.send("sobre");
})

app.listen(2000, function(){
    console.log('Servidor rodando url: http://localhost:2000')
})