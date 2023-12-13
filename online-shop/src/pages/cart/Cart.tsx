import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { useAppSelecetor } from '../../app/hooks';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Avatar,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Cart = () => {
  const products = useAppSelecetor((state) => state.card.products);
  return Object.keys(products).length === 0 ? (
    <Box textAlign="center" mt={3}>
      <ShoppingCartIcon style={{ fontSize: 48, marginBottom: 10 }} />
      <Typography variant="h6">Your cart is empty</Typography>
    </Box>
  ) : (
    <List>
      {Object.entries(products).map(([productId, productData]) => (
        <Accordion key={productId}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${productId}-content`}
            id={`panel-${productId}-header`}
          >
            <Avatar
              src={productData.product.image}
              alt={productData.product.title}
              sx={{
                width: '50px',
                height: '50px',
                marginRight: '10px',
                objectFit: 'contain',
              }}
            />
            <Box>
              <Typography variant="body1">
                {productData.product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Amount: {productData.amount}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Price: ${productData.product.price.toFixed(2)}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Category: {productData.product.category}
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary">
                {productData.product.description}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </List>
  );
};
