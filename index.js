var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req,res){
  const resul = await usuario.findAll(req.body);
  res.json(resul);
});

app.post("/",function(req,res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.listen(3000,function(){
  console.log("ihulll")
});