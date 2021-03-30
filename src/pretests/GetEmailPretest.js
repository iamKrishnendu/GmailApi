var axios = require('axios');
const {BASE_URI,GET_ALL_MESSAGES} = require('../constants/Endpoints')
const getAuthToken = require('../helper/AuthTokenService')


async function getMessage (){
    var config = {
        method: 'get',
        url: `${BASE_URI}/${GET_ALL_MESSAGES}`,
        params: {access_token: `${await getAuthToken()}`},
       
      };
      
     const getEmailRespose =  await axios(config).then(response=>response)
     return getEmailRespose
}



module.exports = getMessage

  
 