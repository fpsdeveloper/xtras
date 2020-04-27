//Utilidades para manejo de archivos
const fs = require('fs');
const util = require("util");

let reader = function readFile(path,callback) {

    fs.readFile(path,'utf-8',(err,data)=> {
        if (err) throw err;
        callback(JSON.parse(data));       
    });
}

let readerSync = function readFileSync(path) {
    return JSON.parse(fs.readFileSync(path));
}

// Lectura Asincronica con Promises y Async/Await basado en Nodejs ver 8.x
const rf = util.promisify(fs.readFile);

const readerPromise = async path => {
   let data = await rf(path, "utf-8");
   return JSON.parse(data); 
}

exports.readFile = readerPromise;  
exports.readFileSync = readerSync;
