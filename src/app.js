//Api horas extra
const express = require('express')
const app = express();

require('dotenv').config();
const port = process.env.PORT||3000;
const data = require('./data');

app.get("/entradas",(req,res) => {
    return res.send(data.entradas);
});

app.listen(port,() => 
    console.log(`Api xTras escuchando en puerto ${port}`),
);

/**
function buildEntrada(value,index,array){
    o = Object.create(entrada);
    o.proyecto = value.proyecto;
    o.tarea = value.tarea;
    o.fecha = value.fecha;
    o.horas = value.horas;
    o.descripcion = value.descripcion;
    return o;
}

function procesaEntradas(data){
    let entradas = data.entradas.map(buildEntrada);
    console.log(entradas);
}


//futils.readFile('./data/entradas.json',procesaEntradas);
*/
