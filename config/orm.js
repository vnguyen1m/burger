// Import MySQL connection
var connection = require("../config/connection.js");

var orm = {  
  selectAll: function(tableInput, cb) {
    // SELECT * FROM burgers_db;
    var queryString = "SELECT * FROM " + tableInput + ";" 
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // example: INSERT INTO cats (name, sleepy) VALUES ('Joe Biden', true);
  insertOne: function(tableInput, burgerVal, devouredVal, cb) {
    var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES" + "('"+ burgerVal + "', " + devouredVal + ");" 
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Update ex: UPDATE burgers_db SET burger_name = 'tofutarian', devoured= 'true' WHERE id = 1;
  updateOne: function(tableInput, burgerVal, devouredVal, idVal, cb) {
    var queryString = "UPDATE " + tableInput + "SET burger_name = '" + burgerVal + "', devoured = '" + devouredVal + "' WHERE id = " + idVal + ";"
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
