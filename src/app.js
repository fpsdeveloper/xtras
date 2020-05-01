//Api horas extra
const express = require('express')
const morgan = require('morgan')
const winston = require('../config/winston')
require('dotenv').config();
const routes = require('./router')

const app = express();
const port = process.env.PORT||3000;

const bodyParser = require('body-parser')

app.use(morgan('combined',{ stream: winston.stream }));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/xtras/_alive",(req,res) => {
    res.status(200).send("ok");
});

app.use('/xtras',routes);

app.listen(port,() => 
    console.log(`Api xTras escuchando en puerto ${port}`),
);
