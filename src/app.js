//Api horas extra
const express = require('express')
const morgan = require('morgan')
const winston = require('../config/winston')
require('dotenv').config();
const data = require('./data');

const app = express();
const port = process.env.PORT||3000;

app.use(morgan('combined',{ stream: winston.stream }));

app.get("/entradas",(req,res) => {
    return res.send(data.entradas);
});

app.get("/entradas/:index",(req,res) => {
    if (data.entradas.length <= parseInt(req.params.index)){
        return res.status(404).send(`No se encuentra la entrada con el indice: ${req.params.index}.`); 
    }
    return res.send(data.entradas[req.params.index]);
});

app.listen(port,() => 
    console.log(`Api xTras escuchando en puerto ${port}`),
);
