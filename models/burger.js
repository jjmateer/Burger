var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, (result)=>{
      cb(result);
    });
  }
}
module.exports = burger;