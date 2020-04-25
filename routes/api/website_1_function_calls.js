require("./website_1");
require("./website_1_db");
require("./website_1_router");

// //Call scrape functions from website_1 file
// console.log("Starting mainscrape...")
// mainscrape()
//specificScrape() //let's leave this one dormant for now

//Now for saving to database
console.log("starting database save...")
saveToDatabase();


//Now for the routes
console.log("starting routing...")
routing();
