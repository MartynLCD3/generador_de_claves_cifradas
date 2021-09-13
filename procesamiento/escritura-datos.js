const fs = require('fs');

module.exports = async datos => await fs.promises.appendFile('./archivos/datos-usuario.txt', datos);
