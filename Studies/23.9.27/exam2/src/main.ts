import { getAllProducts, getSingleProduct } from './services/products-service';
import './style.css';
import { product } from './types/product-type';

async function init() {
  const data = await getAllProducts();
  console.log(data);

  // declaring a dictionary to which
  // we will count how many products are availble
  // for each category
  const categories: Record<string, number> = {};
  data.forEach((product: product) => {
    categories[product.category] = categories[product.category]
      ? categories[product.category] + 1
      : 1;
  });
  console.log(categories);

  const product = await getSingleProduct(1);
  console.log(product);
}
init();

function renderTable(data: product[]) {
  const bodyData = data
    .map((product) => {
      return `
    <tr>
      <td>${product.id}</td>
      <td>${product.title}</td>
      <td>${product.description}</td>
    </tr>`;
    })
    .join('');
}
