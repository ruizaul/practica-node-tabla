const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';

    for (let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log('-------'.green);
      console.log(`tabla-del-${base}`.green);
      console.log('-------'.green);
      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
    return `tabla-del-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
