import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Product } from '../../types/types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleProduct } from '../../services/singleProduct-service';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      const callGetSingleProduct = async () => {
        const result = await getSingleProduct(productId);
        if (result) {
          setProduct(result[0]);
        }
      };
      callGetSingleProduct();
    }
  }, [productId]);

  return product === null ? (
    <Box>
      <LinearProgress />
    </Box>
  ) : (
    <Paper
      elevation={3}
      style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}
    >
      <Typography variant="h4">{product.title}</Typography>
      <Typography variant="h6" color="textSecondary">
        {product.category}
      </Typography>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: '100%', marginTop: '10px' }}
      />
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        {product.description}
      </Typography>
      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Price: ${product.price}
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Add to Cart
      </Button>
    </Paper>
  );
};
