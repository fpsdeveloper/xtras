const futils = require('./fileUtils');
const modelos = require('./model');

const dataPath = "./data";

const archivo =`${dataPath}\\entradas.json`;

//console.log(archivo);

let entradasData = futils.readFileSync(archivo);

//console.log(entradasData);

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

let entradas = entradasData.entradas.map(creaEntrada);

//console.log(entradas);

exports.entradas = entradas;


