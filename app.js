var express = require("express");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
let helmet = require("helmet");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

app.use("/", indexRouter);
/* GET home page. */
app.get("/", function (req, res, next) {
  res.status(200).send("API up");
});
module.exports = app;
