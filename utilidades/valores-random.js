const listaDeNombres = ['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'Gmail'];

module.exports = {
    nombre: listaDeNombres[Math.floor(Math.random() * listaDeNombres.length)],
    clave: Math.floor(Math.random() * 120000 + 100).toString()
};
