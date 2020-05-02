
const modelos = require('./model');
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
   
   let entrada = Object.create(modelos.entrada);
   entrada.proyecto = req.body.proyecto;
   entrada.tarea = req.body.tarea; 
    
   data.entradas.push(entrada);

   res.status(201).send("Se agrego una entrada"); 
});

router.put("/entradas/:index",(req,res) => {
    winston.debug(`actualiza entrada id: ${req.params.index}.`);

    if (data.entradas.length <= parseInt(req.params.index)){
        return res.status(404).send(`No se encuentra la entrada con el indice: ${req.params.index}.`); 
    }
    
    let entrada = data.entradas[req.params.index];

    entrada.proyecto = req.body.proyecto;
    res.status(200).send(entrada);
});

router.delete("/entradas/:index",(req,res) => {
    winston.debug(`borra la entrada id: ${req.params.index}.`);

    if (data.entradas.length <= parseInt(req.params.index)){
        return res.status(404).send(`No se encuentra la entrada con el indice: ${req.params.index}.`); 
    }

    let entrada = data.entradas[req.params.index];

    data.entradas.splice(req.param.index,1);

    res.send(`Se elimino la nota id: ${req.params.index}`);
});

module.exports = router;
