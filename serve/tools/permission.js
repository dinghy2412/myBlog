const crypto = require('crypto');

function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// var encrypted = aesEncrypt(data, key);
// var decrypted = aesDecrypt(encrypted, key);

module.exports = (token) => {
    var result = null;
    try {
        result = aesDecrypt(token, key);
    } catch (e) {
        result = null;
    }
    return token && token.length === 32 ? result === data : false
};














































var data = 'dailnsgk';
var key = 'DdiiNnggHdyi2n4g1d2i!';