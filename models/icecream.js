// * Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var icecream = {
    selectAll: function(cb){
        console.log("made it to icecream.js");
        orm.selectAll("icecream", function(res){
            cb(res);
        })
    }
//     orm.insertOne();
//     orm.updateOne();
}


// * Export at the end of the `burger.js` file.

module.exports = icecream