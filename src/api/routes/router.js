const winston = require('../../config/winston')
const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controller');

router.get("/entradas",controllers.entradas);

router.get("/entradas/:index",controllers.buscaEntrada);

router.post("/entradas",controllers.creaEntrada);

router.put("/entradas/:index",controllers.modificaEntrada);

router.delete("/entradas/:index",controllers.borraEntrada);

module.exports = router;
