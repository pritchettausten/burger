
//--------------------------Requirements---------------------------

var express = require("express");
var burger = require("../models/burgers.js");
var router = express.Router();

//---------------------------Route used for the main page to display burgers--------------------------

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var obj = {
            burger: data
        };
        
        // Renders the index file in the web browser
        res.render("index", obj);
    });
});

//-------------------------Adds a new burger to the database----------------------------

router.post("/burger/new", function(req, res){
    var burger_name = req.body.burger_name;

    burger.insertOne(
        burger_name, function(result){

            // Refreshes the main page to update from the database
            res.redirect("/");
    });
});

//-------------------------Changes the devoured value to true in the database----------------------------

router.post("/burger/devour/:id", function(req, res){
    var id = req.params.id;
    
    burger.updateOne(
        id, function(result){

            // Refreshes the main page to update from the database
            res.redirect("/");
    });  
});
  
module.exports = router;