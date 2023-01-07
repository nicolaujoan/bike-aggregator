CREATE TABLE shops (
  id INT NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  hours TEXT NOT NULL,
  services TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  parent_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (parent_id) REFERENCES categories (id)
);

CREATE TABLE bikes (
  id INT NOT NULL AUTO_INCREMENT,
  msrp TEXT NOT NULL,
  category_id INT NOT NULL,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  weight TEXT,
  suspension TEXT NOT NULL,
  travel TEXT,
  frame TEXT NOT NULL,
  fork TEXT NOT NULL,
  wheels TEXT NOT NULL,
  drive_train TEXT,
  groupset TEXT,
  brakes TEXT NOT NULL,
  seatpost TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories (id)
);

CREATE TABLE availability (
  shop_id INT NOT NULL,
  bike_id INT NOT NULL,
  in_stock INT NOT NULL,
  PRIMARY KEY (shop_id, bike_id),
  FOREIGN KEY (shop_id) REFERENCES shops (id) ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (bike_id) REFERENCES bikes (id) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE USER 'express'@'localhost' IDENTIFIED BY 'node';
GRANT ALL ON bike_aggregator.* TO 'express'@'localhost';