// *********************************************************************************
// website_1controllers.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Items_1 = require("../models/website_1.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:items_1?", function(req, res) {
    if (req.params.item_1) {
      // Display the JSON for ONLY items_1.
      // (Note how we're using the ORM here to run our searches)
      Items_1.findOne({
        where: {
          resultThumbnail: req.params.items_1
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Items_1.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });
//Not needed, since our user will not be updating the database
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
};
