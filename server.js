const express = require("express");
require('dotenv').config()
var app = express();
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080

var routes = require("./controller/burgers_controller");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
