// *********************************************************************************
// website_1controllers.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db_1 = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific item (or all items) then provide JSON
  app.get("/api/:items_1?", function(req, res) {
      // Display the JSON for ONLY items_1.
      // (Note how we're using the ORM here to run our searches)
      db_1.Items_1.findOne({
        where: {
          resultThumbnail: req.params.items_1
        }
      }).then(function(dbItems_1) {
        return res.json(dbItems_1);
      });
  //
  app.get("/api/items_1", function(req, res) {
        db_1.Items_1.findAll({}).then(function(dbItems_1) {
        return res.json(dbItems_1);
      });
    });
//Not needed, since our users will not be updating the database
//   // If a user sends data to add a new character...
//   app.post("/api/new", function(req, res) {
//     // Take the request...
//     var character = req.body;

//     // Create a routeName

//     // Using a RegEx Pattern to remove spaces from character.name
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     var routeName = character.name.replace(/\s+/g, "").toLowerCase();

//     // Then add the character to the database using sequelize
//     Character.create({
//       routeName: routeName,
//       name: character.name,
//       role: character.role,
//       age: character.age,
//       forcePoints: character.forcePoints
//     });

//     res.status(204).end();
//   });
});
}
