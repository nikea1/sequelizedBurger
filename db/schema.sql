CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(

	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured TINYINT(1) DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY(id)

)