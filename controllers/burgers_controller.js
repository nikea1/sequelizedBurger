var burger = require("../models/burger.js");
var express = require("express");

//creates app solely for routing
var router = express.Router();

//redirects to the home page
router.get("/", function(req, res){

	res.redirect("/burger");
})

//displays home page and list all burgers from database
router.get("/burger", function(req, res){
	
	burger.selectAllBurgers(function(data){
		
		res.render('index', {burgers:data});
	
	})
})

//updates burger's devoured state
router.put("/burger/update/:id", function(req, res){
	
	var condition = "id = "+req.params.id;
	var value = "devoured = "+req.body.devoured;
	burger.updateBurger(value, condition, function(){
		res.redirect("/")
	})
})

//adds new burger to database
router.post("/burger/post", function(req, res){
	burger.insertBurger(req.body.hamburger, function(){
		res.redirect("/")
	})
})

//exports router
module.exports = router;