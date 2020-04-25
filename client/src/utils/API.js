import axios from "axios";
// import sampleData from "./sampleData.json";
// import cheerio from "cheerio";

export default {
    scrapeAll: function() {
        return axios.get("/api/website_1/scrape")
        //             .then(function (response){
        //             console.log(response)
        // })
        //             .catch(function(error) {
        //                 console.log(error);
        //             });
    },

    scrapeBySearch: function(searchString){
        var parsedString = searchString.replace(/ /g, "%20");
        return axios.get("/api/website_1/scrape:id/" + parsedString)
                    // .then(function(response) {
                    //     console.log(response)
                    // })
                    // .catch(function(error) {
                    //     console.log(error)
                    // });
    }
};