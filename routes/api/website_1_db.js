require("../../controllers/website_1controller");
require("./website_1");
var Items_1 = require( "../../models");

//After scraping the main page, the following function is to save to the database

saveToDatabase = function(thumbnailResult, detailsResult) {
    //prepare the data
    var dataToStore = Items_1.Items_1.build({
        resultDetails: detailsResult,
        resultThumbnail: thumbnailResult
    });
    console.log(dataToStore)
    //insert data to the database
    dataToStore.save().// We will not sue this part for now
        then(() => {
            console.log("Data successfully saved");
        }).catch(err => {
            console.log("Error: ", err);
        });
}

module.exports = saveToDatabase;