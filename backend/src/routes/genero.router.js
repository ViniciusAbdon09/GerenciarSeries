// src/router/genero.router.js
const generoRouter = require("express").Router()

//Importando o controller
const genero_controller = require("../controllers/genero.controller")

//Rotas do CRUD
generoRouter.post('/create', genero_controller.create)
generoRouter.get('/', genero_controller.getAll)
generoRouter.get('/:id', genero_controller.getOne)
generoRouter.put('/:id', genero_controller.putOne)
generoRouter.delete('/:id', genero_controller.deleteOne)

module.exports = generoRouter;