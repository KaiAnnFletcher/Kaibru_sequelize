import axios from "axios";
// import sampleData from "./sampleData.json";
// import cheerio from "cheerio";

export default {
    scrapeAll: function (website_1Data) {
        return axios.get("api/website_1/scrape", website_1Data)
        //             .then(function (response){
        //                     console.log(response)
        // })
        //             .catch(function(error) {
        //                 console.log(error);
        //             });
    },

    scrapeBySearch: function(searchString){
        var parsedString = searchString.replace(/ /g, "%20");
        return axios.get("api/website_1/search/" + parsedString)
                    // .then(function(response) {
                    //     console.log(response)
                    // })
                    // .catch(function(error) {
                    //     console.log(error)
                    // });
    }
};