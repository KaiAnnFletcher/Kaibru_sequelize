var router = require("express").Router();
var website_1Routes = require("./website_1");
//const userRoutes = require("./user");

//Website_1 routes
//http://localhost:3000/api/website/scrape
router.use("/website_1", website_1Routes);
//router.use("/user", userRoutes);

module.exports = router;