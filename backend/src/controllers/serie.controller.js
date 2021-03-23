// src/controller/serie.controller.js
const Serie = require("../models/serie.model");

// create serie
const create = async (req, res) => {
    const { nome } = req.body;
    const { genero_id } = req.body;
    const { status } = req.body;
    const { lembrete } = req.body;
    const { avaliacao } = req.body;
    res.json(await Serie.create({ nome, genero_id, status, lembrete, avaliacao, dataCadastro: new Date() }))
}

// get all series
const getAll = async (_, res) => {
    res.json(await Serie.find({}));
}

// get one serie
const getOne = async (req, res) => {
  const { id } = req.params;
  res.json(await Serie.findById({ _id: id }));
}

const putOne = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const { genero_id } = req.body;
  const { status } = req.body;
  const { lembrete } = req.body;
  const { avaliacao } = req.body;
  res.json(await Serie.updateOne({ _id: id }, { nome, genero_id, status, lembrete, avaliacao }));
}

const deleteOne = async (req, res) => {
  const { id } = req.params;
  await Serie.deleteOne({ _id: id });
  res.status(204)
}

module.exports = {create, getAll, getOne, putOne, deleteOne}









// // Create a todo
// serieRouter.post("/", async (req, res) => {
//     const { nome } = req.body;
//     const { genero_id } = req.body;
//     const { status } = req.body;
//     const { lembrete } = req.body;
//     const { avaliacao } = req.body;
//     res.json(await Serie.create({ nome, genero_id, status, lembrete, avaliacao, dataCadastro: new Date() }));
// });

// // List all serie
// serieRouter.get("/", async (_, res) => {
//   res.json(await Serie.find({}));
// });

// // Read serie by ID
// serieRouter.get("/:serieId", async (req, res) => {
//   const { serieId } = req.params;
//   res.json(await Serie.findById({ _id: serieId }));
// });

// // Delete serie by ID
// serieRouter.delete("/:serieId", async (req, res) => {
//   const { serieId } = req.params;
//   await Serie.deleteOne({ _id: serieId });
//   res.status(204).send();
// });

// // Update serie by ID
// serieRouter.put("/:serieId", async (req, res) => {
//   const { serieId } = req.params;
//   const { nome } = req.body;
//   const { genero_id } = req.body;
//   const { status } = req.body;
//   const { lembrete } = req.body;
//   const { avaliacao } = req.body;
//   res.json(await Serie.updateOne({ _id: serieId }, { nome, genero_id, status, lembrete, avaliacao }));
// });

// // Create a todo
// serieRouter.post("/", async (req, res) => {
//     const { nome } = req.body;
//     const { genero_id } = req.body;
//     const { status } = req.body;
//     const { lembrete } = req.body;
//     const { avaliacao } = req.body;
//     res.json(await Serie.create({ nome, genero_id, status, lembrete, avaliacao, dataCadastro: new Date() }));
// });

// module.exports = serieRouter;