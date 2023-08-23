'use strict';

const person = (function () {
  let firstName = '';
  let lastName = '';

  return {
    getFirstName(name) {
      if (name.length > 1) {
        firstName = name;
      }
    },
    getLastName(name) {
      if (name.length > 1) {
        lastName = name;
      }
    },
    getFullName() {
      return `${firstName} ${lastName}`;
    },
  };
})();

person.getFirstName('Edo');
person.getLastName('Mathias');
console.log(person.getFullName());
