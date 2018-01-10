var orm = require("../config/orm.js");

// ---------------------------Uses the ORM functions in the burger object------------------------------------

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insertOne: function(burger_name, cb){
        orm.insertOne(burger_name, function(res){
            cb(res);
        });
    },
    updateOne: function(ID, cb){
        orm.updateOne(ID, function(res){
            cb(res);
        });
    }
};

module.exports = burger;

