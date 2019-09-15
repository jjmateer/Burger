const mysql = require('mysql')
const express = require("express");
var app = express();
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080

var routes = require("./controller/burgers_controller");

app.use(routes);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
