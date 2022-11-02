const { createDecipheriv } = require('crypto')
const { holder } = require('./encrypter')

const decipher = createDecipheriv('aes256', key ,iv);
const decryptedMessage = decipher.update(holder, 'hex', 'utf-8')   + decipher.final('utf-8');

console.log(`decrypted: ${decryptedMessage.toString('utf-8')}`);