// Import MySQL connection.
var connection = require("./connection");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function(tableInput, condition, cb) {
    var queryString =
      "UPDATE " + tableInput + " SET tocart=true WHERE id=" + condition + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updatecart: function(tableInput, condition, cb) {
    var queryString =
      "UPDATE " + tableInput + " SET tocart=false WHERE id=" + condition + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(tableInput, val, cb) {
    var queryString =
      "INSERT INTO " + tableInput + " (name) VALUES('" + val + "');";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: function(tableInput, condition, cb) {
    var queryString =
      "DELETE FROM " + tableInput + " WHERE id=" + condition + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model
module.exports = orm;
