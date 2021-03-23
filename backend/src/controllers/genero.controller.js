// src/controller/genero.controller.js
const Genero = require("../models/genero.model");

// create genero
const create = async (req, res) => {
    const { nome } = req.body;
    const { quantidadeSeries } = req.body;
    res.json(await Genero.create({ nome, quantidadeSeries, dataCadastro: new Date() }))
}

// get all generos
const getAll = async (_, res) => {
    res.json(await Genero.find({}));
}

// get one genero
const getOne = async (req, res) => {
  const { id } = req.params;
  res.json(await Genero.findById({ _id: id }));
}

// upadate genero
const putOne = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const { quantidadeSeries } = req.body;
  res.json(await Genero.updateOne({ _id: id }, { nome, quantidadeSeries }));
}

const deleteOne = async (req, res) => {
  const { id } = req.params;
  await Genero.deleteOne({ _id: id });
  res.status(204)
}

module.exports = {create, getAll, getOne, putOne, deleteOne}
