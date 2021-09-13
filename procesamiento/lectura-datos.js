const fs = require('fs');

module.exports = async () => {
    try {
        const datos = await fs.promises.readFile('./archivos/datos-usuario.txt', 'utf-8');
        const arregloDeCuentas = datos.split(/\r?\n/).map(linea => {
                                    const cuenta = linea.split(' ');
                                    return { nombre: cuenta[0], clave: cuenta[1] };
                                 });
        arregloDeCuentas.pop();
        return arregloDeCuentas;
    } catch(error) {
        return console.log(`Error de lectura: ${error}`);
    };
};
