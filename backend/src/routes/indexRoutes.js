const router = require("express").Router();

const series = require("./serie.router");
const generos = require("./genero.router");

router.use("/series", series);
router.use("/generos", generos);

module.exports = router;
