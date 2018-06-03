var express = require("express");
var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");
var nodemailer = require("nodemailer");

var app = express();
var PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


require("./routes/html-routes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

  