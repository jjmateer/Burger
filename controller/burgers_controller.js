const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var tableData = {
      burger: data
    };
    // console.log(tableData);
    res.render("index", tableData);
  });
});
router.post("/api/burgers", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], 
  [req.body["burger_name"], req.body.devoured], (result)=>{
    res.json(result);
  });
});
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
module.exports = router; 