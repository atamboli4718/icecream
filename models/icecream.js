// * Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
orm.selectAll();
orm.insertOne();
orm.updateOne();

// * Export at the end of the `burger.js` file.

