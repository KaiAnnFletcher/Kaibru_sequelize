'use strict';
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
//var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
//var sequelize = require("../config/connection.js");
// Creates a "Items_1" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var Items_1 = sequelize.define("Items_1", {
  // the routeName gets saved as a string
  resultDetails: DataTypes.STRING,
  // the name of the character (a string)
  resultThumbnail: DataTypes.BLOB,
  // the character's role (a string)
  //role: Sequelize.STRING,
  // the character's age (a string)
  //age: Sequelize.INTEGER,
  
  // and the character's force points (an int)
  //forcePoints: Sequelize.INTEGER
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});
return Items_1;
// Syncs with DB
//Items_1.sync();

// Makes the Items_1 Model available for other files (will also create a table)
};