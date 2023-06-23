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
  STRIPE_SECRET_KEY
}