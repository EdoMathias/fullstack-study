import { Product } from '../../types/types';
import style from './card.module.css';

type ProductCardProps = {
  product: Product;
};

export const Card = ({ product }: ProductCardProps) => {
  return (
    <div className={style.productCard}>
      <img
        src={product.image}
        alt={product.title}
        className={style.productImage}
      />
      <div className={style.productDetails}>
        <h2 className={style.productTitle}>{product.title}</h2>
        <p className={style.productDescription}>{product.description}</p>
        <p className={style.productPrice}>${product.price}</p>
        <button className={style.moreInfoButton}>More Info</button>
      </div>
    </div>
  );
};
