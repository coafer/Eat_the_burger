var express = require("express");
var router = express.Router();

// // Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger");

router.get("/", function(req, res) {
  res.render("index");
});

module.exports = router;
