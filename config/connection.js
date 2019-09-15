const mysql = require('mysql');
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Manila22!"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
module.exports = connection;