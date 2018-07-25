CREATE DATABASE Geolocation;

USE Geolocation;

CREATE TABLE users( 
    id int primary key auto_increment, 
    email varchar(255) not null, 
    nombre varchar(255) not null, 
    password varchar(255) not null
);