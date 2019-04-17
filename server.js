
//node packages
var express = require("express");
// var chosen = require("chosen-js");
var app = express();

var PORT = process.env.PORT || 3000;

//data parsing handled by Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./apps/routes/apiRoutes")(app);
require("./apps/routes/htmlRoutes")(app);


//Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
