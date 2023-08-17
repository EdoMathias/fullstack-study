const tableBody = document.querySelector('#users-table > tbody');

console.log(tableBody.innerHTML);

console.log(tableBody.firstElementChild.innerHTML);
console.log(tableBody.lastElementChild.innerHTML);
console.log(tableBody.children);

tableBody.children[1].children[1].innerText = 'b22';

console.log(tableBody.firstElementChild.nextElementSibling);
console.log(
  tableBody.firstElementChild.nextElementSibling.previousElementSibling
);
console.log(tableBody.querySelector('tr:nth-child(2)'));

let row = document.createElement('tr');
row.innerHTML = `<td>a4</td><td>b4</td><td>c4</td>`;
// tableBody.appendChild(row);
tableBody.insertBefore(row, tableBody.lastElementChild);

tableBody.firstElementChild.style.color = 'red';
console.log(tableBody.className);
console.log(tableBody.classList);
console.log(tableBody.classList[0]);
tableBody.classList.add('c4');
console.log(tableBody.classList);

tableBody.addEventListener('click', (event) => {
  console.log('tbody clicked');
  console.log(event.target); // where you clicked specifically
  console.log(event.currentTarget); // where the click originated from
  const tr = event.target.closest('tr');
  console.log(tr.innerHTML);
});
