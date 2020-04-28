const futils = require('./fileUtils');
const modelos = require('./model');
const winston = require('../config/winston')

const dataPath = "./data";

const archivo =`${dataPath}\\entradas.json`;

obtieneData(archivo).catch(error => {
    winston.info(error);
});

async function obtieneData(archivo){
   let datos = await futils.readFile(archivo); 
   exports.entradas = datos.entradas.map(creaEntrada); 
}

function creaEntrada(data){
    let o = Object.create(modelos.entrada);
    o.proyecto = data.proyecto;
    o.tarea = data.tarea;
    o.fecha = data.fecha;
    o.horas = data.horas;
    o.descripcion = data.descripcion;
    o.liquidada  = data.liquidada;

    return o;
}
