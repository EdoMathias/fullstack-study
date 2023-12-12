import { useState } from 'react';
import { useProductAppDispatch } from '../../app/productStore/productHooks';
import { addProduct } from '../../features/product-slice';

export const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const dispatch = useProductAppDispatch();
  return (
    <div>
      <h2>Product Form:</h2>
      <div>
        <label>Enter Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(addProduct({ productId: productName, amount: 1 }));
          }}
        >
          Add product
        </button>
      </div>
    </div>
  );
};
