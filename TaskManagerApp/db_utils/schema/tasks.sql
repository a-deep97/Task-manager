CREATE TABLE tasks(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) DEFAULT NULL,
    project varchar(255) DEFAULT NULL,
    owner varchar(255) DEFAULT NULL,
    description varchar(255) DEFAULT NULL,
    status varchar(255) DEFAULT NULL,
    target varchar(255) DEFAULT NULL,
    PRIMARY KEY (id) 
);