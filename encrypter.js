const {createCipheriv, randomBytes} = require('crypto')

const message = "Confidential information from Maerih the Guru."
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256',key, iv);

//encryptor

const encryptedMessage = cipher.update(message, "utf8", 'hex')  + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`)