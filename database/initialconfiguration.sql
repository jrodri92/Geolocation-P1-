CREATE DATABASE Geolocation;

USE Geolocation;

CREATE TABLE users
( 
  id int primary key auto_increment, 
  email varchar(50) not null, 
  name varchar(255) not null,
  password varchar(255) not null,
  UNIQUE KEY (email)
);

CREATE TABLE locations(
  id int primary key auto_increment,
  user int,
  latitude DOUBLE not null,
  longitud DOUBLE not null,
  timeD TIMESTAMP DEFAULT CURRENT_TIMESTAMP not null,
  FOREIGN KEY (user)
    REFERENCES users(id)
    ON DELETE CASCADE
);