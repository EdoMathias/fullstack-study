-- Group functions
-- פונקציה הפועלת על קבוצת ערכים
select avg(price) as priceAverage from products;
select min(price) as minPrice from products;
select max(price) as maxPrice from products;

-- Group by
-- צירת מספר קבוצות במקום קבוצת ערכים אחת
select categoryId ,avg(price) as priceAverage from products group by categoryId;

-- show countryId and amount of employees for each countryId
select countryId, count(id)  from employees group by countryId;

-- count function numbers all the valid (not null) values
-- Doing count(*) will count the rows even if they are null
select categoryId, count(*) from products group by categoryId;
select countryId, count(*) from employees group by countryId;

-- show supplierId, min price and max price for each supplier
select supplierId, min(price), max(price) from products group by supplierId;

-- from orders, show average tax for each country
select countryId, avg(freight) from orders group by countryId;


-- Union - איחוד מספר עמודות לעמודה אחת- הגיוני לביצוע אם יש בעמודות ערכים מאותו האופי
select id, phone, fax from suppliers
union 
select id, phone, fax from customers;

select companyName, contactName from suppliers
union
select companyName, contactName from customers;


-- JOIN - איחוד עמודות מטבלאות שונות שמכילות קשר בינהן לטבלה אחת
select products.name as productName, products.price, products.quantity, categories.name as categoryName
from products join categories
on products.categoryId = categories.id;

-- Aliases to tables - ניתן לתת כינוי לטבלאות בכדי לקצת שמות
select p.name as productName, p.price, p.quantity, c.name as categoryName
from products as p join categories as c
on p.categoryId = c.id;

-- left join - null החזר את כל הרשומות מהטבלה שנמצאת משמאל לפקודה, גם אם יש רשומות עם ערכים שהם
select p.name as productName, p.price, p.quantity, c.name as categoryName
from products as p left join categories as c
on p.categoryId = c.id;

-- There is also a right join: החזר את כל הרשומות מהטבלה שבימין 
-- and we can create a full join: החזר את כל הרשומות משתי הטבלאות
-- but it is HIGHLY rare.

-- JOIN class exercise
select e.firstName, e.lastName, c.name as countryName
from employees as e join countries as c
on e.countryId = c.id;