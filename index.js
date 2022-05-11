var express = require("express");
var app = express();
var { usuario } = require("./models");
var { empresa } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/usuarios", async function(req, res){
  var mostra = await usuario.findAll();
  res.json(mostra)
})

app.post("/usuarios",function(req,res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/usuarios/:id", function(req, res){
  var atualizar = usuario.update(req.body, {where: {id: req.params.id} });
  res.json(atualizar)
})

app.delete("/usuarios/:id", function(req, res){
  var deletar = usuario.destroy({where: {id: req.params.id} });
  res.json(deletar)
})

//empresas

app.get("/empresas", async function(req, res){
  var show = await empresa.findAll();
  res.json(show)
});

app.post("/empresas",function(req,res){
  var resultado = empresa.create(req.body);
  res.json(resultado);
});

app.put("/empresas/:id", function(req, res){
  var atualizando = empresa.update(req.body, {where: {id: req.params.id} });
  res.json(atualizando)
})

app.delete("/empresas/:id", function(req, res){
  var deletando = empresa.destroy({where: {id: req.params.id} });
  res.json(deletando)
})

app.listen(3001, function(){
  console.log("ihull")
});