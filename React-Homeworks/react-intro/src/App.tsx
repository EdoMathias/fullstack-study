import './App.css';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { Product } from './components/types';
import { Footer } from './components/Footer';

export default function App() {
  const productArray: Product[] = [
    {
      productId: 'a1',
      name: 'aa',
      category: 'Frozen food',
      price: 15,
    },
    { productId: 'b1', name: 'bb', category: 'Dairy', price: 5 },
    { productId: 'c1', name: 'cc', category: 'Snacks', price: 10 },
  ];
  const tableHeaders = ['name', 'category', 'price'];
  return (
    <>
      <Header />
      <Table headers={tableHeaders} data={productArray} />
      <Footer />
    </>
  );
}
