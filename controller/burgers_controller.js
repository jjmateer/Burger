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
module.exports = router;