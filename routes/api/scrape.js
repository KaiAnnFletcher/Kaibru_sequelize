//var express = require("express");
var router = require("express").Router();
var website_1Controller = require("../../controllers/website_1controller");
//var logger = require("morgan");
//var bodyParser = require('body-parser');

//**figure sequelize connection to db**
//sequelize connection is done in server.js

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

var axios = require("axios");
var cheerio = require("cheerio");

//requiring this website's models
var Items_1 = require("../../models/website_1");


//Configure the morgan middleware
//The morgan logger will be used for logging requests 
//using the dev format
//Concise output colored by response status for development use. 
//The status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

//app.use(logger("dev"));
// app.use(bodyParser.urlencoded({ extended: false }));
// //The request body must be parsed as JSON
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
// //Direct express to static folder
// app.use(express.static("public"));

// //Connect to sequelize DB via the config folder
// require("../../config/connection");

//Now to configure the routes
function scrape() {
    axios.get("https://greenheartshop.org").then(function(response) {
//Load to cheerio and save to $ selector
    console.log("Scraped all greenheartshop mainpage");
    var $ = cheerio.load(response.data);
    console.log(response.data);
    let output = [];
    let promises = [];
//Now we need to grab the title reference for each article
$("article").each(function(i, element) {
console.log(element)
//save empty result object

var result = {};

//thumbnail
result.thumbnail = $(this)
.children("article.product-grid-item.product-block")
.children("figure.product-item-thumbnail")
.children("a")
.attr("href")
.children("div.lazy-image")
.children("img.lazy-image")
console.log($(this))

//details
result.detail= $(this)
.children("div.product-item-details")
.children("div.product-item-brand")
.children("h5.product-item-title")
.children("a")
.children("div.product-price-line")
.children("span.price-value")
.text();
console.log($(this))
});

};
scrape()
