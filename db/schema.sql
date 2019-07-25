--    * Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

DROP DATABASE IF EXISTS icecream_db;

CREATE DATABASE icecream_db;

USE icecream_db;

CREATE TABLE icecream (
  id int AUTO_INCREMENT NOT NULL,
  icename varchar(30) NOT NULL,
  devoured boolean DEFAULT false,
  PRIMARY KEY(id)
);