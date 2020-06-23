require("../../controllers/website_1controller");
require("./website_1");
var Items_1 = require( "../../models");

//After scraping the main page, the following function is to save to the database

saveToDatabase = function(thumbnailResult, detailsResult) {
    //prepare the data
    //var dataToStore =
    //extending model with method

    Items_1.Items_1.findOrCreate({where:
        {resultThumbnail: thumbnailResult,
         resultDetails: detailsResult}    
    });
    // Items_1.Items_1.findOrCreate({where:
    //     {resultThumbnail: thumbnailResult, resultDetails: detailsResult, 
    //     upsert:true, new:true}
    // })
    //console.log(dataToStore)
    //insert data to the database
    // dataToStore.save().
    //     then(() => {
    //         console.log("Data successfully saved");
    //     }).catch(err => {
    //         console.log("Error: ", err);
    //     });
}

module.exports = saveToDatabase;