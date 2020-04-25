var website_1Controller = require("../../controllers/website_1controller");
var router = require("express").Router();

routing = function() {
//Now to CREATE the results using controller file
 console.log("creating items in the database now...")
 //router.route("/browse")
 router.post('/browse', website_1Controller.items_1_create);
 router.get('/browse', website_1Controller.items_1_list);

//Now to display the results
 console.log("Items now being displayed...")
 //router.route("/browse:search")
 router.get('/browse:search', website_1Controller.items_1_specific);
};
require("./website_1");
module.exports = routing;
module.exports = router;