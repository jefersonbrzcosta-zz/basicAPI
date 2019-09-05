const express = require("express");
const bodyParser = require("body-parser");
let { User } = require("./app/models");

var app = express();

app.use(bodyParser.json());

{
  /* Add users */
}
app.post("/adduser", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

{
  /* Listar users */
}
app.get("/users", async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ["password"] }
  });
  res.json(users);
});

{
  /* Procurar users */
}
app.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

{
  /* Editar users */
}
app.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

{
  /* Excluir users */
}
app.delete("/users/:id", async (req, res) => {
  const user = await User.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json("Usuário ID:" + user + " removido com sucesso.");
});

app.listen(3000, function() {
  console.log("Servidor iniciado na porta 3000");
});
