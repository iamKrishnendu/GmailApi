const {encodedWithBase64} = require('../utils/CommonUtils')



async function sendEmailRequest (message){
    var encodedMessage = await encodedWithBase64(message)
    return JSON.stringify({raw:`${encodedMessage}`})
}


module.exports = sendEmailRequest