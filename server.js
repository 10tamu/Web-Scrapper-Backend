var express = require("express");
var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");
var app = express();
const routes = require("./routes/api");

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

app.listen("3001");

console.log("Listening to the port 3001");

exports = module.exports = app;
