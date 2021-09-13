const crypto = require('crypto');

module.exports = clave => {
    return new Promise(resolve => {
        crypto.randomBytes(64, (err, buf) => {
            const sal = buf.toString('base64');
            crypto.pbkdf2(clave, sal, 100000, 64, 'sha512', (err, key) => {
                resolve(key.toString('hex'));
            });
        });
    });
};
