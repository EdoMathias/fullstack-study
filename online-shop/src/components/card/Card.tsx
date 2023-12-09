import { Product } from '../../types/types';
import style from './card.module.css';

//

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
      <CardMedia
        component="img"
        sx={{ height: 140, objectFit: 'contain' }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="text.secondary"
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '4',
          }}
        >
          {product.description}
        </Typography>
        <Divider />
        <Typography variant="h6">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/product/${product.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
