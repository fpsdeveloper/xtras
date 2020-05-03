const data = require('../../data');
const winston = require('../../config/winston')
const modelos = require('../../model');

exports.entradas = (req,res) => {
    return res.send(data.entradas);
}

exports.buscaEntrada = (req,res) => {
    if (data.entradas.length <= parseInt(req.params.index)){
        return res.status(404).send(`No se encuentra la entrada con el indice: ${req.params.index}.`); 
    }
    return res.send(data.entradas[req.params.index]);
}

exports.creaEntrada = (req,res) => {
   winston.debug("Agrega Entrada"); 
   
   let entrada = Object.create(modelos.entrada);
   entrada.proyecto = req.body.proyecto;
   entrada.tarea = req.body.tarea; 
    
   data.entradas.push(entrada);

   res.status(201).send("Se agrego una entrada"); 
}
   
exports.modificaEntrada = (req,res) => {
    winston.debug(`actualiza entrada id: ${req.params.index}.`);

    if (data.entradas.length <= parseInt(req.params.index)){
        return res.status(404).send(`No se encuentra la entrada con el indice: ${req.params.index}.`); 
    }
    
    let entrada = data.entradas[req.params.index];
    
    winston.debug(req.body.proyecto);
    entrada.proyecto = req.body.proyecto;
    res.status(200).send(entrada);
    
}

exports.borraEntrada = (req,res) => {
    winston.debug(`borra la entrada id: ${req.params.index}.`);

    if (data.entradas.length <= parseInt(req.params.index)){
        return res.status(404).send(`No se encuentra la entrada con el indice: ${req.params.index}.`); 
    }

    let entrada = data.entradas[req.params.index];

    data.entradas.splice(req.param.index,1);

    res.send(`Se elimino la nota id: ${req.params.index}`);

}
