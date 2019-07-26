
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
    insertOne: function (table, col, value, cb) {
      var queryString = "INSERT INTO ?? (??) VALUES(?);";
      connection.query(queryString, [table, col, value], function (err, result) {
        if (err){ throw err};
        cb(result);
      });
    },
    updateOne: function (table, UPD_col, newValue, WHERE_col, id_value, cb) {
      var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
      connection.query(queryString, [table, UPD_col, newValue, WHERE_col, id_value], function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  };
  
  module.exports = orm;
