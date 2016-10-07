var mysql = require("mysql");

//runs heroku's jawsdb when on heroku
if(process.env.JAWSDB_URL){
	var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
//else run locally
else{
	var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	})
}
//connect to db
connection.connect(function(err){
	if(err) {
		console.log("Error connection: "+err.stack)
		return;
	}

	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;