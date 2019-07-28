DROP DATABASE IF EXISTS icecream_db;

CREATE DATABASE icecream_db;

USE icecream_db;

CREATE TABLE icecream (
  id int AUTO_INCREMENT NOT NULL,
  icename varchar(30) NOT NULL,
  devoured boolean DEFAULT false,
  PRIMARY KEY(id)
);