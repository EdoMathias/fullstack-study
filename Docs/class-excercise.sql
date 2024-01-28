-- show all items that are in stock
select * from products where stock > 0 order by price;

-- show just id, name, price and stock of products with a price between 20 to 30 in a descending order
select id, name, price, stock from products where price between 20 and 30 order by price desc;

-- show only employees from USA
select * from employees where countryId = 24;

-- show from employees: firstName in lower, lastName in upper, hireYear, birthDate in isreali format
select lower(firstName) as firstName, upper(lastName) as lastName, year(hireDate) as hireYear, date_format(birthDate, '%d/%m/%y') as birthDate from employees;