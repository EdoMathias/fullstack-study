'use strict';

const service = (() => {
  const baseUrl = 'https://fakestoreapi.com';

  async function getProducts() {
    const response = await fetch(`${baseUrl}/products`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to fetch');
  }

  async function getCategories() {
    const response = await fetch(`${baseUrl}/products/categories`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to fetch');
  }

  async function getProductsByCategory(category) {
    const response = await fetch(`${baseUrl}/products/category/${category}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to fetch');
  }

  async function addProduct(product) {
    const response = await fetch(`${baseUrl}/products`, {
      method: 'POST',
      body: JSON.stringify(product),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to add product');
  }

  return {
    getProducts,
    addProduct,
    getCategories,
    getProductsByCategory,
  };
})();
