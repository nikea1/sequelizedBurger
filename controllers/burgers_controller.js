var models = require("../models");
var express = require("express");

//creates app solely for routing
var router = express.Router();

models.sequelize.sync({force:true})
.then(function(){
	return models.Burger.create({
		burgerName: "Dodeca Bacon Cheese Burger"
	})
}).then(function(){
	return models.Burger.create({
		burgerName: "Burger"
	})
}).then(function(){
	return models.Burger.create({
		burgerName: "Happy Meal Burger"
	})
})
//redirects to the home page
router.get("/", function(req, res){

	res.redirect("/burger");
})

//displays home page and list all burgers from database

router.get("/burger", function(req, res){
	
	models.Burger.findAll().then(function(burgers){
		res.render('index', {burgers:burgers});
	})
	
})

//updates burger's devoured state
router.put("/burger/update/:id", function(req, res){
	
	
	models.Burger.update(
	{
		devoured:req.body.devoured,
	},
	{
		where:{
			id: req.params.id,
		},
	}).then(function(){
		res.redirect("/")
	})
	
})

//adds new burger to database
router.post("/burger/post", function(req, res){

	models.Burger.create({
		burgerName:req.body.hamburger
	}).then(function(){
		res.redirect("/")
	})
	
})

//exports router
module.exports = router;