var orm = require("../config/orm.js");

var burger = {
  _all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  get all() {
    return this._all;
  },
  set all(value) {
    this._all = value;
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
