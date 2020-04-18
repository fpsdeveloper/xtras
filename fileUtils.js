//Utilidades para manejo de archivos
const fs = require('fs');

let reader = function readFile(path,callback) {

    fs.readFile(path,'utf-8',(err,data)=> {
        if (err) throw err;
        callback(JSON.parse(data));       
    });
}

let readerSync = function readFileSync(path) {
    return JSON.parse(fs.readFileSync(path));
}


exports.readFile = reader;  
exports.readFileSync = readerSync;
