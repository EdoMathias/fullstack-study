'use strict';

async function init() {
  try {
    const categories = await service.getCategories();
    populateCategories(categories);
  } catch (error) {
    console.log(error);
  }

  document
    .getElementById('categories')
    .addEventListener('change', async function () {
      const category = this.selectedOptions[0].value;
      const products =
        category === 'All'
          ? await service.getProducts()
          : await service.getProductsByCategory(category);
      generateTableBody(products);
    });

  try {
    const products = await service.getProducts();
    console.log(products);
    generateTableBody(products);
  } catch (error) {
    console.log(error);
  }

  document.getElementById('add-product').addEventListener('click', async () => {
    const product = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    };
    try {
      const result = await service.addProduct(product);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  });
}
init();

function generateTableBody(array) {
  const tbody = document.getElementById('table-body');
  const arrBodyData = array
    .map(
      (product) =>
        `<tr>
          <td class="ellipsis-150">${product.title}</td>
          <td>${product.price}</td>
          <td class="ellipsis-150">${product.description}</td>
          <td><img class="product-image" src="${product.image}"></td>
      </tr>`
    )
    .join('');
  tbody.innerHTML = arrBodyData;
}

function populateCategories(categories) {
  const categoriesElement = document.getElementById('categories');
  const categoriesData = categories.map(
    (category) => `<option>${category}</option>`
  );
  categoriesElement.insertAdjacentHTML('beforeend', categoriesData.join(''));
}
