import { useState } from 'react';
import { Product } from '../../types/types';

interface AddProductProps {
  onAdd: (productValue: string) => void;
}

export const AddProduct = ({ onAdd }: AddProductProps) => {
  const [productToAdd, setProductToAdd] = useState('');
  const [buttonState, setButtonState] = useState(false);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setProductToAdd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onAdd(productToAdd);
        }}
      >
        Add Product
      </button>
    </div>
  );
};
