var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var mostra = await usuario.findAll();
  res.json(mostra)
})

app.post("/",function(req,res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", function(req, res){
  var atualizar = usuario.update(req.body, {where: {id: req.params.id} });
  res.json(atualizar)
})

app.delete("/:id", function(req, res){
  var deletar = usuario.destroy({where: {id: req.params.id} });
  res.json(deletar)
})

app.listen(3000,function(){
  console.log("ihull")
});