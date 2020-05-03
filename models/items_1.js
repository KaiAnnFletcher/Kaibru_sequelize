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
  resultDetails: {type: DataTypes.STRING},
  resultThumbnail: {type: DataTypes.BLOB('long')}
  
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});
return Items_1
}
