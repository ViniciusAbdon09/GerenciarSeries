// src/router/serieRouter.js
const serieRouter = require("express").Router()

//Importando o controller
const serie_controller = require("../controllers/serie.controller")

//Rotas do CRUD
serieRouter.post('/create', serie_controller.create)
serieRouter.get('/', serie_controller.getAll)
serieRouter.get('/:id', serie_controller.getOne)
serieRouter.put('/:id', serie_controller.putOne)
serieRouter.delete('/:id', serie_controller.deleteOne)

module.exports = serieRouter;