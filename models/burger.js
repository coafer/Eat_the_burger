var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update("burgers", id, cb);
  },
  updatecart: function(id, cb) {
    orm.updatecart("burgers", id, cb);
  },
  create: function(name, cb) {
    orm.create("burgers", name, cb);
  },
  delete: function(id, cb) {
    orm.delete("burgers", id, cb);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
