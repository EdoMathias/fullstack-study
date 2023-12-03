import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../types/types';
import { getProductsByCategoryId } from '../../services/products-service';

export const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    if (categoryId) {
      const callGetProductsByCategoryId = async () => {
        const result = await getProductsByCategoryId(categoryId);
        setProducts(result!);
      };
      callGetProductsByCategoryId();
    }
  }, [categoryId]);

  return products === null ? (
    <div>LOADING...</div>
  ) : (
    <div>
      Category: {categoryId}:
      <ul>
        {products?.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};
