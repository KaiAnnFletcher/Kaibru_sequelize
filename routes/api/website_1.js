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

// function saveInDatabase() {
    
//     //prepare the date
//     var dataToStore = Items_1.build({
//         resultThumbnail: result.thumbnail,
//         resultDetails: result.detail,
    
//     });
    

//     //insert data in database
//     dataToStore.save().
//         then(
//             console.log("data saved")
//         ).catch(
//             console.log("error saving data: ", err)
//         );
// }

// console.log("Starting the database update...")
// if (result.thumbnail !== [] && result.detail !== "") {
//     var promise = saveInDatabase({
//         resultThumbnail: result.thumbnail,
//         resultDetails: result.detail
//     })
// promises.push(promise);
// console.log("promise push complete")
// }

// Promise.all(promises).then(function(data)  {
// res.json(data)

// //Send client message
// res.send("Scrape Complete");
// });
// });
// });
// //To do
// //router.route
// //Overall review required, but better to put together controllers and api for now; otherwise cannot test scrape

// //Now we need to define a scrape for a specifc search that the user might enter
// //route to get instructions for a specific item.
})
})
});

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
            //console.log(result.thumbnail)

            //details
            result.detail= $(this)
            .children("div.product-item-details")
            // .children("div.product-item-brand")
            // .children("h5.product-item-title")
            // .children("div.product-price-line")
            // .children("span.price-value")
            .text();
//             console.log(result.detail)

function saveInDatabase() {
    //prepare the date
    var dataToStore = Items_1.build({
        resultThummbnail: result.thumbnail,
        resultDetails: result.detail
    });

    //insert data in database
    dataToStore.save().
        then(
            console.log("data saved")
        ).catch(
            console.log("error saving data: ", err)
        );
}

console.log("starting database update for specific search")
if (result.thumbnail !== [] && result.detail !== ""){
    var promise = saveInDatabase({
        resultThumbnail: result.thumbnail,
        resultDetails: result.detail
    })
promises.push(promise);
console.log("promise push complete")
}

Promise.all(promises).then(function(data) {
res.json(data)

//Send client message
res.send("Scrape Complete");
})
})
});
})

// router.post('/scrapeall', (req, res) => {
//     scrapeAll().then((result) => {
//         result.map(result  => {
//             create({
//                 resultThumbnail: result.thumbnail,
//                 resultDetails: result.details
//             })
//         });
//         res.json({message: "Scraping successfully saved to database"})
//     })
// });

router.get("/", function(req, res, next) {
    website_1Controller.findAll().then(function(data) {
        console.log("status 200");
        res.status(200).send({ items: data, msg:"Items returned successfully" })
    })
    .catch(function(err) {
        next(err)
    })
    });



module.exports = router;