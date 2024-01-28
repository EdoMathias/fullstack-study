-- INSERT - Adds a new row
insert into products(name, price, stock) values('Pizza',80,200);
-- Class excercise
insert into employees(firstName, lastName, title) values('Edo', 'Mathias', 'QA Engineer, Team Lead');

-- Update - Updates an existing row
update products set price = 85, stock = 180 where id = 79;
-- Class excercise
update employees set title = 'Team Lead, QA Engineer', countryId = 24, cityId = 78 where id = 10;

-- Delete - Deletes an existing row
delete from products where id = 79;
-- Class excercise
delete from employees where id = 10;
