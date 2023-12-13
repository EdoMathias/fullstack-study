import { useState } from 'react';
import { useProductAppDispatch } from '../../app/productStore/productHooks';
import { addProduct } from '../../features/product-slice';

export const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = useState(0);
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
        <label>Enter Amount:</label>
        <input
          type="number"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(addProduct({ productId: productName, amount: amount }));
          }}
        >
          Add product
        </button>
      </div>
    </div>
  );
};
