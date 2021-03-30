var faker = require('faker')
var {v4: uuidv4} = require('uuid')
var base64 =  require('base-64')

/**
 * Generate random email addresses
 * @returns fake email ids
 */

async function randomEmail(){
    return faker.internet.email()
}

/**
 * Generate UUIDs
 * @returns uuids
 */
async function getuuid(){
    return uuidv4()
}

/**
 * Encode string with base64 format
 * @param {*} textToBeEncoded 
 * @returns base64 encoded string
 */
async function encodedWithBase64(textToBeEncoded){
    var encodedMessage = base64.encode(textToBeEncoded);
    return encodedMessage
}

/**
 * Generate random texts
 * @returns random text
 */
async function randomText(){
    var text = faker.lorem.text()
    return text
}

module.exports = {
    randomEmail,
    uuidv4,
    encodedWithBase64,
    randomText
}

