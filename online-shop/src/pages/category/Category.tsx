import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../types/types';
import { getProductsByCategoryId } from '../../services/products-service';
import { ProductCard } from '../../components/card/Card';
import style from './category.module.css';

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
    <div className={style.categoryContainer}>
      Category: {categoryId}:
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
