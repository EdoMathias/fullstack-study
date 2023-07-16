let products = [];

function init() {
  const storageProducts = localStorage.getItem('products');
  if (storageProducts !== null) {
    products = JSON.parse(storageProducts);
  }
  generateTableBody();
}

function addProduct() {
  const form = document.forms['add-product-form'];
  const name = form['product-name'].value;
  const price = form['product-price'].value;
  const category = form['product-category'].value;
  const image = form['product-image'].value;
  products[products.length] = {
    name: name,
    price: price,
    category: category,
    image: image,
  };
  localStorage.setItem('products', JSON.stringify(products));

  generateTableBody();
  form.reset();
}

function generateTableBody() {
  document.querySelector('#table-body').innerHTML = ``;
  let htmlString = '';
  for (let i = 0; i < products.length; i++) {
    htmlString += `
    <tr>
      <td>${products[i].name}</td>
      <td>${products[i].price}</td>
      <td>${products[i].category}</td>
      <td><img src="${products[i].image}" class="img-fluid mx-auto d-block"></td>
      <td> <button onclick="deleteProduct(${i})" class="btn btn-primary">Remove product</button></td>
      <tr/>
    `;
  }
  document.querySelector('#table-body').innerHTML += htmlString;
}

function deleteProduct(productIndexNumber) {
  let newProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (productIndexNumber !== i) {
      newProducts[newProducts.length] = products[i];
    }
  }
  products = newProducts;
  generateTableBody();
  localStorage.setItem('products', JSON.stringify(products));
}

init();
