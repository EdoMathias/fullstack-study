import { useProductAppSelecetor } from '../../app/productStore/productHooks';

export const ProductList = () => {
  const products = useProductAppSelecetor((state) => state.product.products);

  return (
    <div>
      <h2>Product List:</h2>
      <div>
        <ul>
          {Object.entries(products).map(([productId, productAmount]) => (
            <li key={productId}>
              Product: {productId}, amount:{productAmount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
