import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../types/types';
import { getProductsByCategoryId } from '../../services/products-service';
import { ProductCard } from '../../components/card/Card';
import Box from '@mui/material/Box';

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
    <Box>LOADING...</Box>
  ) : (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 2,
        }}
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};
