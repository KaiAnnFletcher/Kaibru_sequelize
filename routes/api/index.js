var router = require("express").Router();
require("./website_1");
var website_1Routes = require("./website_1");
//const userRoutes = require("./user");

//Website_1 routes
//http://localhost:3000/api/website_1_function_call/scrape

//authRouter.use(require('./authenticate').basic(usersdb))
//router.use("/website_1_function_call", website_1Routes);
//experimental use
 router.use("/website_1", website_1Routes);
//router.use("/user", userRoutes); 

module.exports = router