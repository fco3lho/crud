-- Configuração inicial banco de dados
CREATE DATABASE simplecrud;

USE simplecrud;

CREATE TABLE game (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	address VARCHAR(200) NOT NULL,
	price VARCHAR(20) NOT NULL,
	contact VARCHAR(20) NOT NULL,
PRIMARY KEY (id))
engine=innodb DEFAULT charset=latin1;