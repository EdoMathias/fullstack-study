//-- importing the whole class the following
//-- way, will help us create the instances
//-- in the file itself, preventing data
//-- override.
const employee = require('./employee');

const employee1 = new employee();
employee1.setName('Edo');
employee1.sayHello();

const employee2 = require('./employee');
const emp2 = new employee2();
emp2.setName('Noa');
emp2.sayHello();

employee1.sayHello();

/*
//-- when importing a class instance, 
//-- employee2 will override the name 
//-- set by employee1
const employee1 = require('./employee');

const employee1 = new employee();
employee1.setName('Edo');
employee1.sayHello();

const employee2 = require('./employee');
employee2.setName('Noa');
employee2.sayHello();

employee1.sayHello();
*/
