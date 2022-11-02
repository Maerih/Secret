const {createCipheriv, randomBytes, createDecipheriv} = require('crypto')
const ps = require("prompt-sync");
const prompt = ps({ sigint:true })


const message = prompt("Message to Secret: ")
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256',key, iv);

//encryptor

const encryptedMessage = cipher.update(message, "utf8", 'hex')  + cipher.final('hex');
const holder = encryptedMessage
console.log(`Encrypted: ${encryptedMessage}`)

console.log(`${holder}`)




module.exports = {
    holder
}