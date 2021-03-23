// src/models/genero.model.js
const mongoose = require("mongoose");

// Crie um esquema mongoose, faça o título e as propriedades criadas
const generoSchema = new mongoose.Schema({
  nome: { type: String, required: true, max: 150 },
  quantidadeSeries: {type: Number},
  dataCadastro: { type: Date, required: true },
});

const Genero = mongoose.model("Genero", generoSchema);

module.exports = Genero;