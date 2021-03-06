CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Name text
  /* Describe your table here.*/
);

CREATE TABLE rooms (
  ID INT AUTO_INCREMENT PRIMARY KEY, 
  Roomname text
);

CREATE TABLE messages (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Message text, 
  UserID INT,
  RoomID INT,
  FOREIGN KEY (UserID) REFERENCES users(ID),
  FOREIGN KEY (RoomID) REFERENCES rooms(ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

