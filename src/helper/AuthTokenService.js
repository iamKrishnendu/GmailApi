const {google} = require('googleapis')
const {CLIENT_ID,CLIENT_SECRET,REDIRECT_URI,REFRESH_TOKEN} = require('../constants/Credentials')

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

async function getAuthToken(){
    const authToken = await oAuth2Client.getAccessToken()
    return JSON.stringify(authToken.token).slice(1, -1)
}


module.exports = getAuthToken