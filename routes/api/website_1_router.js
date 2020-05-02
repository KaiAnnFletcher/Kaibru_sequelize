// var website_1Controller = require("../../controllers/website_1controller");
// var router = require("express").Router();

// routing = function() {
// //Now to CREATE the results using controller file
//  //router.route("/browse")
//  //router.post('/browse', website_1Controller.items_1_create);
//   router.get('/browse', (req, res, next) => {
//         website_1Controller.items_1_list
//          .then((data) => {
//          res.status(200).send({ items_1: data, msg: "items_1 retrieved"})
//          }).catch(err => next(err))
//     });

// //Now to display the results
//  //router.route("/browse:search")
//   router.get('/browse:search', (req, res, next) => {
//         website_1Controller.items_1_specific
//          .then((search) => {
//          search ? res.status(200).send({ singleItems_1: search }) : res.status(200).send({ errMsg: "Search does not exist" 
//          }).catch(err => next(err))
//         });
// });
// }
// require("./website_1");
// module.exports = routing;
// module.exports = router;