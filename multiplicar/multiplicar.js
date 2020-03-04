const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        console.log(`${base} ey! El valor introducido no es un numero`);
        return;
    }
    if (!Number(limite)) {
        console.log(`${limite} El valor limite introducido no es un numero`);
        return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.green);
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Crando..... El valor introducido no es un numero');
            return;
        }
        if (!Number(limite)) {
            reject('El valor limite introducido no es un numero');
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}
module.exports = {
    crearArchivo,
    listarTabla
}