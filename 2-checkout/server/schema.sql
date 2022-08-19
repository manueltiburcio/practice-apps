CREATE DATABASE IF NOT EXISTS checkout;
USE checkout;

CREATE TABLE f1 (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  password VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE f2 (
  id INT NOT NULL AUTO_INCREMENT,
  address VARCHAR(300),
  phone VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE f3 (
  id INT NOT NULL AUTO_INCREMENT,
  credit VARCHAR(50),
  expiry VARCHAR(50),
  cvv VARCHAR(50),
  zipcode VARCHAR(50),
  PRIMARY KEY (id)
);

