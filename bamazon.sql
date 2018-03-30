-- DROP DATABASE IF EXISTS bamazon_db;
-- CREATE DATABASE bamazon_db;

-- USE bamazon_db;

-- CREATE TABLE products (
-- 	item_id INTEGER(12) AUTO_INCREMENT NOT NULL,
-- 	product_name VARCHAR(40) NOT NULL,
-- department_name VARCHAR(30) NOT NULL,
-- 	price DECIMAL(10,4) NOT NULL,
-- 	stock_quantity INTEGER(12) NOT NULL,
-- 	PRIMARY KEY (item_id)
-- );

-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES  	('Madden 18', 'Electronics', 60, 50),
-- 			('Eletric Shaver', 'Cosmetics', 34.95, 368),
-- 			('PlayStation 4 Pro', 'Electronics', 399, 73),
-- 			('Organic Strawberries', 'Produce', 17.99, 100),
-- 			('Bright and Early Orang Juice', 'Grocery', 0.99, 130),
-- 			('Clorox Wipes ', 'Homehold', 5.58, 466),
-- 			('Purified Water', 'Grocery', 2.88, 243),
-- 			('Baby Red Potatoes', 'Grocery', 3.98, 300),
-- 			('Beats by Dre', 'Electronics', 89.99, 88),
-- 			('Apple Airpods', 'Electronics', 134.66, 968),
-- 			('Head and Shoulder Shampoo', 'Cosmetic', 9.94, 1000)