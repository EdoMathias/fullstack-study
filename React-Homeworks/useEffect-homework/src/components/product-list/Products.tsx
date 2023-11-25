import axios from 'axios';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
};

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredResult, setFilteredResult] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const searchInputElement = document.getElementById(
    'search-input'
  ) as HTMLInputElement;

  useEffect(() => {
    let returnedProducts = null;
    const getProducts = async () => {
      returnedProducts = await axios.get<Product[]>(
        'https://fakestoreapi.com/products'
      );
      const productsData = returnedProducts.data.map((product: Product) => ({
        id: product.id,
        title: product.title,
      }));
      setProducts(productsData);
    };
    getProducts();
  }, []);

  const searchItems = (searchValue: string) => {
    console.log('clicked');
    setSearchInput(searchValue);

    if (searchValue !== '') {
      const filteredData = products?.filter((product) => {
        return Object.values(product)
          .join('')
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredResult(filteredData);
    } else {
      setFilteredResult(products);
    }
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Search..." id="search-input" />
        <button
          onClick={() => {
            searchItems(searchInputElement.value);
          }}
        >
          Search
        </button>
      </div>
      <main>
        {searchInput.length > 1 ? (
          <div>
            <h2>Products:</h2>
            <ul>
              {filteredResult?.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          </div>
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
      </main>
    </div>
  );
};
