export async function getAllProducts() {
  const result = await fetch('https://fakestoreapi.com/products');
  const data = await result.json();
  return data;
}

export async function getSingleProduct(productId: number) {
  const result = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const singleProduct = await result.json();
  return singleProduct;
}

export async function getAllCategories() {
  const result = await fetch(`https://fakestoreapi.com/products/categories`);
  const allCategories = await result.json();
  return allCategories;
}
