const connection = require("../config/connection.js");
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (tableName, cols, vals, cb) => {
        let queryStatement = `INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;
        connection.query(queryStatement, vals, (err, result) => {
          if (err) throw err;
          console.log("Sucesfully Added");
          cb(result);
        });
    
      }
}
module.exports = orm;