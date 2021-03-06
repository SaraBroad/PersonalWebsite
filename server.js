var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
require('dotenv').config();


var app = express();
var PORT = process.env.PORT || 8080;

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

  