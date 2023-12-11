CREATE TABLE tasks(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) DEFAULT NULL,
    project varchar(255) DEFAULT NULL,
    owner varchar(255) DEFAULT NULL,
    author varchar(255) NOT NULL,
    description varchar(255) DEFAULT NULL,
    status varchar(255) DEFAULT NULL,
    target date DEFAULT NULL,
    creation_date date NOT NULL,
    creation_time  time NOT NULL,
    PRIMARY KEY (id) 
);