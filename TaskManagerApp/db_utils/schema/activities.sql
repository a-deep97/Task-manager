CREATE TABLE TaskActivities (
  id INT AUTO_INCREMENT,
  task_id INT NOT NULL,
  comment VARCHAR(255) DEFAULT NULL,
  activity VARCHAR(50) DEFAULT NULL,
  author VARCHAR(50) DEFAULT NULL,
  activity_order INT NOT NULL,
  deleted BOOLEAN DEFAULT FALSE,
  activity_date DATE,
  activity_time TIME,
  PRIMARY KEY (id),
  FOREIGN KEY (task_id) REFERENCES tasks(id)
);
