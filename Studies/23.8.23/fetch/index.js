'use strict';
//-- HTTP request --//
// {http , https}://<domain>:port/path?queryParameter

//-- Rest API --//

//-- Methods --//
//-- 1. GET
//-- 2. POST
//-- 3. PUT
//-- 4. DELETE

async function init() {
  document.getElementById('add-product').addEventListener('click', () => {
    addProduct();
  });
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log(response);
  console.log(data);
}
init();

//-- GET method --//
async function createTableFromFetch() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  generateTableBody(data);
}
createTableFromFetch();

function generateTableBody(array) {
  const tbody = document.getElementById('table-body');
  const arrBodyData = array
    .map(
      (product) =>
        `<tr>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>
        <td><img src="${product.image}"></td>
    </tr>`
    )
    .join('');
  tbody.innerHTML = arrBodyData;
}

//-- POST method --//
async function addProduct() {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    body: JSON.stringify({
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    }),
  });
  const data = await response.json();
  console.log(response);
  console.log(data);
}
