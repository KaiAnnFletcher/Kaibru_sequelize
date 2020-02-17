var express = require("express");
var router = require("express").Router();
var logger = require("morgan");
var bodyParser = require('body-parser');

//**figure sequelize connection to db**
//sequelize connection is done in server.js

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

var axios = require("axios");
var cheerio = require("cheerio");

//requiring this website's models
var db = require("./models");

var PORT = 3000;

//Initialize Express
var app = express();

//Configure the morgan middleware
//The morgan logger will be used for logging requests 
//using the dev format
//Concise output colored by response status for development use. 
//The status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
//The request body must be parsed as JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//Direct express to static folder
app.use(express.static("public"));

//Connect to sequelize DB via the config folder
require("../../config");

//Now to configure the routes

router.get("/scrape", function(req, res) {
//instead of simple res.render, user router.get  

//Grab the html body with axios    
axios.get("https://greenheartshop.org/").then(function(response) {
//Load to cheerio and save to $ selector
console.log("Scraped all greenheartshop mainpage");
var $ = cheerio.load(response.data);
let output = [];
let promises = [];
//Now we need to grab the title reference for each article
$(".product-grid-item").each(function(i, element) {
console.log(element)
//save empty result object
var result = {};

//thumbnail
    
result.thumbnail = $(this)
.children("product-item-thumbnail")
.attr("href");

//details
result.detail= $(this)
.children("product-item-details")
.text();
});

//link
// Add link

//Create a new article  using the "result" object built via scraping
// db.Article.create(result)
//     .then(function(dbArticle) {
//      //View the result in the console
//      console.log(dbArticle);
//     })
//     .catch(function(err) {
//     //If there is an error, log it also
//     // console.log(err);    
//     });
// });
Promise.all(promises).then((data) => {
res.json(data)

//Send client message
res.send("Scrape Complete");
});
});
//To do
//router.route
//Overall review required, but better to put together controllers and api for now; otherwise cannot test scrape

//Now we need to define a scrape for a specifc search that the user might enter
//route to get instructions for a specific item.

router.get("/search/:search", function (req, res) {
    axios.get("https://greenheartshop.org/search.php?search_query=" + req.params.search).then(function (response) {
        console.log("***** scraped specific page *****"); 
        var $ = cheerio.load(response.data);
        let output = [];
        let promises = [];

        $(".product-grid-item").each(function(i, element) {
            //Save empty result object
            var result = {};

            //thumbnail
    
            result.thumbnail = $(this)
            .children("product-item-thumbnail")
            .attr("href");

            //details
            result.detail= $(this)
            .children("product-item-details")
            .text();
});
Promise.all(promises).then((data) => {
res.json(data)
})
    })
})
});