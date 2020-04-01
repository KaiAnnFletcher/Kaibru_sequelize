//var express = require("express");
var router = require("express").Router();
var website_1Controller = require("../../controllers/website_1controller");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

var axios = require("axios");
var cheerio = require("cheerio");

//requiring this website's models
var Items_1 = require( "../../models/website_1");
 
//Now to configure the routes
router.get("/scrape", function(req, res) {
//instead of simple res.render, user router.get  
console.log("scraping started...");
//Grab the html body with axios    
axios.get("https://greenheartshop.org").then(function(response) {
//Load to cheerio and save to $ selector
    console.log("Scraping all greenheartshop mainpage...");
    var $ = cheerio.load(response.data);
    var output = [];
    var promises = [];

//Now we need to grab the title reference for each article
$("article").each(function(i, element) {

//save empty result object
var result = {};

//thumbnail
result.thumbnail = $(this)
//.children("article.product-grid-item.product-block").html()
.children("figure.product-item-thumbnail")
.children("a")
.attr("href")
//console.log("result thumbnail")
//console.log(result)
//console.log(result.thumbnail)

var result = {}
//details
result.detail= $(this)
//.children("product-item-mask").html()
.children("div.product-item-details")
// .children("div.product-item-brand")
// .children("h5.product-item-title")
// .children("a")
// .children("div.product-item-price")
//.children("product-price-line")
//.children("price-value")
.text()
//result.detail = result.detail.trim();
//console.log("result detail")
//console.log(result)
//console.log(result.detail)

if(result.thumbnail !== {} && result.details !== "") {
    console.log("Creating database items...")
    router.post("/", (req, res, next) => {
        Items_1.create({
            resultThumbnail: result.thumbnail, 
            resultDetails: result.detail
        }).then( res => {
            res.status(200).send({msg: "Results Created"})
        }).catch(err => next(err))
    });
}
});


//Now we need to define a scrape for a specifc search that the user might enter
router.get("/search/:search", function (req, res) {
    axios.get("https://greenheartshop.org/search.php?search_query=" + req.params.search).then(function (response) {
        console.log("***** scraping specific page *****"); 
        var $ = cheerio.load(response.data);
        var output = [];
        var promises = [];

        $("article").each(function(i, element) {
            //Save empty result object
            var result = {};

            //thumbnail
            result.thumbnail = $(this)
            .children("figure.product-item-thumbnail")
            .children("a")
            .attr("href");
            console.log(result.thumbnail)

            //details
            result.detail= $(this)
            .children("div.product-item-details")
            // .children("div.product-item-brand")
            // .children("h5.product-item-title")
            // .children("div.product-price-line")
            // .children("span.price-value")
            .text();
            console.log(result.detail)
})
})
});
//terminal prints result as undefined because a specific search has not been launched yet - we are just scraping the main page
if(result.thumbnail !== {} && result.details !== ""){
    
console.log("Creating database items...")
router.post("/", (req, res, next) => {
    Items_1.create({
        resultThumbnail: result.thumbnail, 
        resultDetails: result.detail
    }).then( res => {
        res.status(200).send({msg: "Results Created"})
    }).catch(err => next(err))
});
}
});


console.log("Rendering database items...")
router.get("/", function(req, res, next) {
    website_1Controller.findAll().then(function(data) {
        console.log("status 200");
        res.status(200).send({ items: data, msg:"Items returned successfully" })
    })
    .catch(function(err) {
        next(err)
    })
    });
})

module.exports = router;
