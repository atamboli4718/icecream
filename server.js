// Dependencies
// Import routes and give the server access to them.
var exphbs = require('express-handlebars');
var express = require("express");
var router = require("./controllers/icecream_controller");
var app = express();


var PORT = process.env.PORT || 3000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(router);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
  