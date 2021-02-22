var express = require("express");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
let helmet = require("helmet");

var transactionsRoute = require("./api/routes/transactions");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

app.use("/api/transactions", transactionsRoute);
/* GET home page. */
app.get("/", function (req, res, next) {
  res.status(200).send("API up");
});
module.exports = app;
