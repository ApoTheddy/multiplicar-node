const { rejects } = require('assert');
const fs = require('fs');
const colors = require("colors");


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        console.log('==========================================='.green);
        console.log(`   =============Tabla de ${base}==============`.green);
        console.log('==========================================='.green);

        if (!Number(base) && !Number(limite)) {
            reject(`la base: ${base} y el ${limite} no son validos`);
            return;
        }
        for (var i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }
    });
}


let cargarArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = "";

        if (!Number(base)) {
            reject(`la base ingresada ${base} no es valida`);
            return;
        } else {
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i}\n`
            }

            fs.writeFile(`tablas/tabla${base}.txt`, data, ((err) => {
                if (err) reject(err);
                else resolve(`tabla${base}.txt`.green);
            }));

        }

    });
}

module.exports = {
    cargarArchivo,
    listarTabla,
}