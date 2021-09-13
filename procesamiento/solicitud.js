const random = require('../utilidades/valores-random');
const solicitud = require('../utilidades/preguntas-respuestas');
const almacenar = require('./escritura-datos');
const hashear = require('./encriptado');
const leerFichero = require('./lectura-datos');

process.stdin.on('data', async data => {
    
    solicitud.respuesta.push(data.toString().trim());

    if(solicitud.respuesta.length === solicitud.pregunta.length) {
        const nombre = solicitud.respuesta[0].replace(/\s+/g, '') || random.nombre;
        const clave = await hashear(random.clave);
        await almacenar(`${nombre} ${clave}\n`);
        const cuentas = await leerFichero();
        console.table(cuentas);
        return process.exit();
    };

    solicitarDatos(solicitud.respuesta.length);
});

const solicitarDatos = posicion => process.stdout.write(solicitud.pregunta[posicion]);

module.exports = solicitarDatos;
