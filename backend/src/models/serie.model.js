// src/models/serie.model.js
const mongoose = require("mongoose");

// Crie um esquema mongoose, faça o título e as propriedades criadas
const serieSchema = new mongoose.Schema({
  nome: { type: String, required: true, max: 150 },
  genero_id: { type: String, max: 150},
  status: {type: String, max: 20},
  lembrete: {type: String, max: 200},
  avaliacao: {type: Number}, 
  dataCadastro: { type: Date, required: true },
});

const Serie = mongoose.model("Serie", serieSchema);

module.exports = Serie;