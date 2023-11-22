import axios from 'axios';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
};

export const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      //   const result = await fetch('https://fakestoreapi.com/products');
      //   const data = await result.json();
      //   const productsData = data.map((p: Product) => ({
      //     title: p.title,
      //     id: p.id,
      //   }));
      //   setProducts(productsData);

      const data = await axios.get<Product[]>(
        'https://fakestoreapi.com/products'
      );
      console.log(data);
      const productsData = data.data.map((p: Product) => ({
        title: p.title,
        id: p.id,
      }));
      setProducts(productsData);
    };
    getProducts();
  }, []);

  return (
    <div>
      {products === null ? (
        <div>Loading</div>
      ) : (
        <div>
          <h2>Products:</h2>
          <ul>
            {products?.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
