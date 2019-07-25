//Dependencies
var express = require("express");
var icecream = require("../models/icecream");
var router = express.Router();

// Create the `router` for the app, and export the `router` at the end of your file.
// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    icecream.selectAll(function(data) {
      var iceObject = {
        icecream: data
      };
      console.log(iceObject);
      res.render("index", iceObject);
    });
  });
  
  
  router.post("/api/icecream", function(req, res) {
   
    icecream.insertIcecream([req.body.data.iceName], function(result) {
      
      res.json({ id: result.insertId });
    });
  });
  router.put("/api/icecream/:id", function(req, res) {
    var id = req.params.id;

    icecream.devourIcecream(id, req.body.devoured,function(result) {
     //console.log(result)
     res.json({ changed: result.changedRows })
    });

  }) ;
  router.delete("/api/icecreams/:id", function(req, res) {
    var id = req.params.id;
    
    icecream.eatIcecream(id, function(result) {
     //console.log(result)
     
     res.json({ affected: result.affectedRows })
    
    });

  })  
  
//  Export routes for server.js to use.
   module.exports = router;