// Setup MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3000,
  host: "localhost",
  user: "",
  password: "",
  database: "burgers_db"
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id" + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;