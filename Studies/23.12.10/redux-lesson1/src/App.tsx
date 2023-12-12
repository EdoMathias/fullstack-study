import './App.css';
import { Counter } from './components/counter/Counter';
import { ProductForm } from './components/productForm/ProductForm';
import { ProductList } from './components/productList/ProductList';

function App() {
  return (
    <>
      <Counter />
      <hr />
      <ProductList />
      <ProductForm />
    </>
  );
}

export default App;
