var orm = require("../config/orm");

var icecream = {
    selectAll: function(cb){
        console.log("made it to icecream.js");
        orm.selectAll("icecream", function(res){
            console.log(res);
            cb(res);
        })
    },
//     orm.insertOne();
  updateOne: function(newValue, id_value, cb){
    console.log("made it to icecream.js UpdateOne");
    orm.updateOne('icecream', 'devoured', newValue, "id", id_value, function(res){
      console.log(res);
      cb(res);
    });
  }
}


// * Export at the end of the `burger.js` file.

module.exports = icecream
