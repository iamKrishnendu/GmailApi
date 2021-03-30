var axios = require('axios');
const {BASE_URI,SEND_MESSAGES} = require('../constants/Endpoints')
const getAuthToken = require('../helper/AuthTokenService')
const sendEmailRequest = require('../model/SendEmailPayload')

async function sendMessage (text){
    var config = {
        method: 'post',
        url: `${BASE_URI}/${SEND_MESSAGES}`,
        params: {access_token: `${await getAuthToken()}`},
        headers: { 
            'Content-Type': 'text/plain'
          },
          data : await sendEmailRequest(text)
      };
      
     const sendEmailRespose =  await axios(config).then(response=>response)
     return sendEmailRespose
}


module.exports = sendMessage

  
 