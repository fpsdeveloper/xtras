const data = require('./data');
const winston = require('../config/winston')
const express = require('express')
const router = express.Router()

router.get("/entradas",(req,res) => {
    return res.send(data.entradas);
});

router.get("/entradas/:index",(req,res) => {
    if (data.entradas.length <= parseInt(req.params.index)){
        return res.status(404).send(`No se encuentra la entrada con el indice: ${req.params.index}.`); 
    }
    return res.send(data.entradas[req.params.index]);
});

router.post("/entradas",(req,res) => {
   winston.debug("Agrega Entrada"); 
   res.status(201).send("Se agrego una entrada"); 
});
module.exports = router;
