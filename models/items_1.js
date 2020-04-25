// export class Items_1 extends Model {

//   static init(sequelize) {
//       super.init({
//           thumbnail: {
//               type: DataTypes.BLOB,
//               //primaryKey: true
//           },
//           detail: DataTypes.STRING,
//       }, { sequelize })
//   }
// }

'use strict'
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
//var { Sequelize, DataTypes } = require('sequelize');
//var sequelize = new Sequelize('kaibru', 'root', 'root');
// sequelize (lowercase) references our connection to the DB.
//var sequelize = require("../config/connection.js");
// Creates a "Items_1" model that matches up with DB
 module.exports = function(sequelize, DataTypes) {
  var Items_1 = sequelize.define("Items_1", {
  // the routeName gets saved as a string
  resultDetails: {type: DataTypes.STRING},
  // the name of the character (a string)
  resultThumbnail: {type: DataTypes.BLOB}
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
return Items_1
}
//Syncs with DB
//Items_1.sync();
//console.log(Items_1 === sequelize.models.Items_1);
// Makes the Items_1 Model available for other files (will also create a table)

