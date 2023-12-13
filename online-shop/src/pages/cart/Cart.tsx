import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useAppSelecetor } from '../../app/hooks';

export const Cart = () => {
  const products = useAppSelecetor((state) => state.card.products);
  return (
    <List>
      {Object.entries(products).map((product, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={product[1].product.title}
            secondary={
              <Typography variant="body2" color="textSecondary">
                Amount: {product[1].amount}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
