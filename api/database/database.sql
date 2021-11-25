CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE FOLDERS(
    folder_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE TODOs(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(50),
    isFinished BOOLEAN DEFAULT 0,
    folder_id INT(11),
    FOREIGN KEY (folder_id) REFERENCES FOLDERS(folder_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE USERS(
    id_user INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50),
    pass VARCHAR(50)
);