var connection = require("./connection.js");

var orm ={
	//selects all items from database
	selectAll:function(table, callback){
		connection.query("SELECT * FROM "+table, function(err, rows){
			if (err) throw err;

			console.log(rows);
			callback(rows);
		})
	},
	//inserts one item from database
	insertOne: function(table, column, item, callback){
		connection.query("INSERT INTO "+table+"("+column+") VALUES (?)", [item], function(err, results){
			if (err) throw err;

			console.log(results);
			callback(results);
		})
	},

	//updates item from database
	updateOne: function(table, value, condition, callback){
		connection.query("UPDATE "+table+" SET "+value+" WHERE "+condition,  function(err, results){
			if (err) throw err;

			console.log(results);
			callback(results);
		})
	}
}

module.exports = orm;