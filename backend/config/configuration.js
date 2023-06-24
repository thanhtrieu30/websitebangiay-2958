require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV}` });

const BASE_CLIENT_URL = process.env.BASE_CLIENT_URL;
const BASE_API_URL = process.env.BASE_API_URL;
const DB_URL = process.env.DB_URL;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_EXPIRES = process.env.JWT_EXPIRES;
const ACTIVATION_SECRET = process.env.ACTIVATION_SECRET;
const SMPT_HOST = process.env.SMPT_HOST;
const SMPT_PORT = process.env.SMPT_PORT;
const SMPT_PASSWORD = process.env.SMPT_PASSWORD;
const SMPT_MAIL = process.env.SMPT_MAIL;
const STRIPE_API_KEY = process.env.STRIPE_API_KEY;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const prefix = process.env.API_PREFIX || '';

module.exports = {
  BASE_CLIENT_URL, 
  BASE_API_URL,
  DB_URL,
  JWT_SECRET_KEY,
  JWT_EXPIRES,
  ACTIVATION_SECRET,
  SMPT_HOST,
  SMPT_PORT,
  SMPT_PASSWORD,
  SMPT_MAIL,
  STRIPE_API_KEY,
  STRIPE_SECRET_KEY,


  // api
  API_USER: `${prefix}/api/v2/user`,
  API_CONVERSATION: `${prefix}/api/v2/conversation`,
  API_MESSAGE: `${prefix}/api/v2/message`,
  API_ORDER: `${prefix}/api/v2/order`,
  API_SHOP: `${prefix}/api/v2/shop`,
  API_PRODUCT: `${prefix}/api/v2/product`,
  API_EVENT: `${prefix}/api/v2/event`,
  API_COUPON: `${prefix}/api/v2/coupon`,
  API_PAYMENT: `${prefix}/api/v2/payment`,
  API_WITHDRAW: `${prefix}/api/v2/withdraw`,
  API_STATIC: `${prefix}/api/v2/`,
  API_TEST: `${prefix}/api/v2/test`,
}