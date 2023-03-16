CREATE TABLE tasks(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) DEFAULT NULL,
    proj_id varchar(255) DEFAULT NULL,
    emp_id varchar(255) DEFAULT NULL,
    description varchar(255) DEFAULT NULL,
    status varchar(255) DEFAULT NULL,
    target varchar(255) DEFAULT NULL,
    PRIMARY KEY (id) 
);