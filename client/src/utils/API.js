import axios from "axios";
// import sampleData from "./sampleData.json";
// import cheerio from "cheerio";

export default {
    scrapeAll: function () {
        return axios.get("api/website/scrape");
    },

    scrapeBySearch: function(searchString){
        var parsedString = searchString.replace(/ /g, "%20");
        return axios.get("api/website/seacrh/" + parsedString);
    }
}