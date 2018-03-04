// Import ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(burgerVal, devouredVal, cb) {
    orm.insertOne("burgers", burgerVal, devouredVal, function(res) {
      cb(res);
    });
  }, 
  updateOne: function(burgerVal, devouredVal, idVal, cb) {
    orm.updateOne("burgers", burgerVal, devouredVal, idVal, function(res) {
      cb(res);
    });
  }
};

// Export database functions from controller(burgers.js)
module.exports = burger;
