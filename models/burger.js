var orm = require("../config/orm.js");

//stores orm in burger 
var burger = {
	//list all burgers
	selectAllBurgers: function(callback){
		orm.selectAll('burgers', function(res){
			callback(res);
		});
	},

	//insters one burger to database
	insertBurger: function(value, callback){
		orm.insertOne('burgers', 'burger_name', value, function(res){
			callback(res);
		})
	},
	//updates burger from database
	updateBurger: function(value, condition, callback){
		
		orm.updateOne('burgers', value, condition, function(res){
			callback(res);
		})
	}
}

module.exports = burger;