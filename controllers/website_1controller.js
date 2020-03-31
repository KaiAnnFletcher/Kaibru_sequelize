// *********************************************************************************
// website_1controllers.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific item (or all items) then provide JSON
  app.get("/api/:items_1?", function(req, res) {
      // Display the JSON for ONLY items_1.
      // (Note how we're using the ORM here to run our searches)
      db.Items_1.findOne({
        where: {
          resultThumbnail: req.params.items_1
        }
      }).then(function(Items_1) {
        return res.json(Items_1);
      });
    });
  app.get("/api/items_1", function(req, res) {
        db.Items_1.findAll({}).then(function(Items_1) {
        return res.json(Items_1);
      });
    });

// For whe the scrape updates the database...
   app.post("/api/new", function(req, res) {
//     Take the request...
     var items_1 = req.body;

//     // Create a routeName

//     // Using a RegEx Pattern to remove spaces from character.name
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
     //var routeName = items_1.name.replace(/\s+/g, "").toLowerCase();

//     // Then add the items_1 to the database using sequelize
       db.Items_1.create({
          resultThumbnail: items_1.resultThumbnail,
          resultDetails: items_1.resultDetails
       });
//       name: character.name,
//       role: character.role,
//       age: character.age
//       forcePoints: character.forcePoints
//     });
     res.status(204).end();
  });
}
