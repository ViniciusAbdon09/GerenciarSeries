// index.js
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

//importando as rotas
const routes = require("./src/routes/indexRoutes");


const app = express();

// adicionando body-parser middleware parse JSON para as requests
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

// // As solicitações feitas para o caminho /serie base devem passar pelo serieRouter
// app.use("/series", serieRouter);
// // As solicitações feitas para o caminho /genero base devem passar pelo generoRouter
// app.use("/generos", generoRouter)

app.use("/api", routes);

const iniciarServidor = async () => {
  await mongoose.connect("mongodb://localhost:27017/gerenciarSeries", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    "Conexão com o mongo MongoDB em: mongodb://localhost:27017/gerenciarSeries"
  );
  await app.listen(8000);
  console.log("Servidor rodando na porta 8000...");
};

iniciarServidor();