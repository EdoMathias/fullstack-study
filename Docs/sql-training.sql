-- select all columns (*), all rows from a table:
SELECT * FROM products;

-- select some columns, all rows from a table:
SELECT id, name, price from products;

-- select some columns with aliases (adjective), all rows:
SELECT id, name as productName, price as amount from products;

-- select all columns, some rows:
SELECT * FROM products WHERE price < 10;

-- and, or, not: 
 SELECT * FROM products WHERE price >= 10 AND price <= 20;
 SELECT * FROM products WHERE price = 10 OR price = 20;
 SELECT * FROM products WHERE NOT price > 5;
 
 -- between, in, like:
 select * from products where price between 10 and 20;
 select * from products where price in (10, 20, 30, 40);
 select * from products where name like 'Ch%'; -- % --> 0 or more chars
 select * from products where name like '%Ch%'; -- %char% --> will return all names that contain the char in them
 
 -- sorting:
 select * from products order by price; -- ascending
select * from products order by price desc; -- descending

-- Scalar (one value) functions:
-- פונקציה סקלרית זו פונקציה הפועלת על עמודה ומכל ערך מחזירה ערך אחר
select id, upper(name) as name from products; -- will uppercase all names
select name, floor(price) as flooredPrice from products; -- will round numbers down
select firstName, lastName, year(birthDate) as birthYear from employees;

