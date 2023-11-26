import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { ProductsList } from './components/products-list/ProductsList';
import { Product } from './types/types';
import { FilterInput } from './components/filter-input/FilterInput';
import { AddProduct } from './components/add-item/AddProduct';
import { v4 as uuid } from 'uuid';

function App() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios.get<Product[]>(
        'https://fakestoreapi.com/products'
      );
      setProducts(
        result.data.map((product: Product) => ({
          id: product.id.toString(),
          title: product.title,
        }))
      );
    };
    getProducts();
  }, []);

  const handleFilter = (searchValue: string) => {
    setFilter(searchValue);
  };
  const handleAdd = (productValue: string) => {
    const productToAdd: Product = {
      id: uuid(),
      title: productValue,
    };
    console.log(productToAdd);
    const newProducts = products ? [...products, productToAdd] : [productToAdd];
    setProducts(newProducts);
  };

  return (
    <>
      <FilterInput onFilter={handleFilter} />
      <AddProduct onAdd={handleAdd} />
      {products === null ? (
        <div>Loading...</div>
      ) : (
        <ProductsList
          data={products.filter((product) =>
            product.title.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      )}
    </>
  );
}

export default App;
