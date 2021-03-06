var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(burger_data) {
    var hbsObject = {
      burgersD: burger_data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/updatecart", function(req, res) {
  burger.updatecart(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.custom_burger, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.delete("/burgers/delete", function(req, res) {
  burger.delete(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
