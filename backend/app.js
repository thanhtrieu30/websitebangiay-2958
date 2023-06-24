const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { BASE_CLIENT_URL, API_STATIC, API_TEST, API_USER, API_CONVERSATION, API_MESSAGE, API_ORDER, API_SHOP, API_PRODUCT, API_EVENT, API_COUPON, API_PAYMENT, API_WITHDRAW } 
= require("./config/configuration");

console.log("BEFORE_START: ", BASE_CLIENT_URL)

app.use(
  cors({
    origin: [
      `${BASE_CLIENT_URL}`,
      `${BASE_CLIENT_URL}/`,
      // "https://websitebangiay-2958.vercel.app",
      // "https://websitebangiay-2958.vercel.app/",
      // "http://localhost:3000",
      // "http://localhost:3000/",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(API_STATIC, express.static(path.join(__dirname, "./uploads")));
app.use(API_TEST, (req, res) => {
  res.send("Hello world!");
});

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/coupounCode");
const payment = require("./controller/payment");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message = require("./controller/message");
const withdraw = require("./controller/withdraw");


app.use(API_USER, user);
app.use(API_CONVERSATION, conversation);
app.use(API_MESSAGE, message);
app.use(API_ORDER, order);
app.use(API_SHOP, shop);
app.use(API_PRODUCT, product);
app.use(API_EVENT, event);
app.use(API_COUPON, coupon);
app.use(API_PAYMENT, payment);
app.use(API_WITHDRAW, withdraw);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
