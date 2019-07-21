// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

var connection = require("./connection.js");

var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM icecream";
  
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        callback(result);
      });
    },
    insertOne: function(newIcecream) {
        var queryString = "INSERT INTO icecream (icecream_name) VALUES ?",[newIcecream];
    
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          callback(result);
        });
      },
    updateOne: function(existingIcecream) {
    var queryString = "UPDATE icecream SET ? = TRUE", [existingIcecream];
  
        connection.query(queryString, function(err, result) {
        if (err) throw err;
        callback(result);
        });
    },
  };
  
  module.exports = orm;
