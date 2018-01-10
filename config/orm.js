
//--------------------------Requires the connection.js file to connect to the database-------------------

var connection = require("./connection.js");

var orm = {

//--------------------------Gets all the burgers from the table------------------------------------------
  
  selectAll: function(cb){
    var query = "SELECT * FROM burgers";

    connection.query(query, function(err, res){
      if (err) throw err;
      cb(res);
    });
  },

//--------------------------Inserts the user input into the table as a new burger-------------------------
  
  insertOne: function(burger_name, cb){
    var query = "INSERT INTO burgers SET ?";

    connection.query(query, {burger_name, devoured: false}, function(err, res){
      if (err) throw err;
      cb(res);
    });
  },

//--------------------------Updates the burger to devoured when the button is clicked----------------------

  updateOne: function(id, cb){
    var query = "UPDATE burgers SET ? WHERE ?"; 
    
    connection.query(query, [{devoured: true}, {ID: id}], function(err, res){
      if (err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;