require('dotenv').config({ path: '../../.env' })
const BASE_URI = `${process.env.BASE_URI}`
const GET_ALL_MESSAGES = `${process.env.SERVICE}/${process.env.VERSION}/users/${process.env.USER_ID}/messages`;
const SEND_MESSAGES = `${process.env.SERVICE}/${process.env.VERSION}/users/${process.env.USER_ID}/messages/send`; 


module.exports = {
    BASE_URI,
    GET_ALL_MESSAGES,
    SEND_MESSAGES
}