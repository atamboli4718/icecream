
var connection = require("./connection.js");

var orm = {
    selectAll: function(table,cb) {
      console.log("made it to orm");
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    // insertOne: function(newIcecream) {
    //     var queryString = "INSERT INTO icecream (icecream_name) VALUES ?",[newIcecream];
    
    //     connection.query(queryString, function(err, result) {
    //       if (err) throw err;
    //       cb(result);
    //     });
    //   },
    updateOne: function (table, UPD_col, newValue, WHERE_col, id_value, cb) {
      var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
      connection.query(queryString, [table, UPD_col, newValue, WHERE_col, id_value], function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  };
  
  module.exports = orm;
