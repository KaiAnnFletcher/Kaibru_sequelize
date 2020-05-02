//var express = require("express");
var router = require("express").Router();
var website_1Controller = require("../../controllers")
//requiring this website's models
var Items_1 = require("../../models");
require("./website_1_db");
//require("./website_1_router");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

var axios = require("axios");
var cheerio = require("cheerio");

//mainscrape = function()  {
//Now to configure the routes
router.get("/scrape", function(req, res, next) {
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
console.log(result.thumbnail)

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
console.log(result.detail)

//Capture the scraped data and save to database
console.log("Capturing Scrape...")
if(result.detail !== '') {
    var thumbnailResult = result.thumbnail;
    var detailsResult = result.detail;
    var promise = Items_1;
    saveToDatabase(thumbnailResult, detailsResult)
    console.log("saveToDatabase");
    promises.push(promise);
}
Promise.all(promises).then((data) => {
    res.json(data);
});
//saveToDatabase();

// if (result.thumbnail !== {} && result.detail !== "") {
//     var promise = Items_1
//     // .items_1_create({
//     //     resultThumbnail: result.thumbnail,
//     //     resultDetails: result.detail  
//     //   })
//     promises.push(promise)
//     // .then(dbModel => output.push(dbModel));
//     Promise.all(promises).then((data) => {
//       res.json(data)
//     })
//   }


});
});
//Now to CREATE the results using controller file
// console.log("creating items in the database now...")
// router.post('/scrape', website_1Controller.items_1_create);
//Now to display the results
// console.log("Items now being displayed...")
// router.get('/scrape/display', website_1Controller.items_1_list)
//console.log("Routing to the page...")
//routing();
next()
});
router.get('/scrape', website_1Controller.findAll)
// router.get('/scrape', (req, res, next) => {
//     console.log("Routing...")
//         website_1Controller.findAll()
//         .then((data) => {
//          console.log(data)
//          res.status(200).send({ data: data})
//          }).catch(err => next(err))
//     });

//specificScrape = function() {
//Now we need to define a scrape for a specifc search that the user might enter
router.get("/scrape/:id", function (req, res, next) {
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

//Capture the scraped data and save to database
console.log("Capturing Scrape data...")
if(result.detail !== '') {
    var thumbnailResult = result.thumbnail;
    var detailsResult = result.detail;
    var promise = Items_1
    .saveToDatabase(thumbnailResult, detailsResult)
    console.log("saveToDatabase");
    promises.push(promise);
}
Promise.all(promises).then((data) => {
    res.json(data);
});

            //Call function that saves to db
            //saveToDatabase()
            //routes()
            // if (result.thumbnail !== {} && result.detail !== "") {
            //     var promise = Items_1
            //     // .items_1_create({
            //     //     resultThumbnail: result.thumbnail,
            //     //     resultDetails: result.detail  
            //     //   })
            //     promises.push(promise)
            //     // .then(dbModel => output.push(dbModel));
            //     Promise.all(promises).then((data) => {
            //       res.json(data)
            //     })
            //   }
            
});
});
//console.log("Routing to the page...")
//routing();
//Now to CREATE the results using controller file
// console.log("creating items in the database now...")
// router.post('scrape/specfic', website_1Controller.items_1_create);

//Now to display the results
// console.log("Items now being displayed...")
// router.get('scrape/specific/dosplay', website_1Controller.items_1_specific);
next()
});
//}

// router.get('/browse', (req, res, next) => {
// console.log("Routing...")
//     website_1Controller.items_1_list
//      .then((data) => {
//      res.status(200).send({ items_1: data, msg: "items_1 retrieved"})
//      }).catch(err => next(err))
// });



router.get('/scrape:id', (req, res, next) => {
    console.log("Routing...")
    website_1Controller.findById()
     .then((search) => {
     search ? res.status(200).send({ singleItems_1: search }) : res.status(200).send({ errMsg: "Search does not exist" 
     }).catch(err => next(err))
    });
});

module.exports = router;


