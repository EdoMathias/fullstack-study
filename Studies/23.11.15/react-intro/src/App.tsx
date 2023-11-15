import { useState } from 'react';
import './App.css';
import User from './components/User';
import Image from './components/Image';
import { List } from './components/List';
import { Table } from './components/Table';
import { AdvancedUserType, UserType } from './components/types';

function App() {
  const [count, setCount] = useState(0);
  const items = ['aa', 'bb', 'cc'];
  const headers = ['name', 'email', 'age'];
  const tableData: UserType[] = [
    { id: 'a1', name: 'aa', email: 'aa@gmail.com', age: 20 },
    { id: 'b1', name: 'bb', email: 'bb@gmail.com', age: 20 },
    { id: 'c1', name: 'cc', email: 'cc@gmail.com', age: 20 },
  ];

  const headers1 = ['name', 'email', 'age', 'password'];
  const tableData1: AdvancedUserType[] = [
    { id: 'a1', name: 'aa', email: 'aa@gmail.com', age: 20, password: '123' },
    { id: 'b1', name: 'bb', email: 'bb@gmail.com', age: 20, password: '234' },
    { id: 'c1', name: 'cc', email: 'cc@gmail.com', age: 20, password: '456' },
  ];

  return (
    <>
      <User
        firstName="Edo1"
        lastName="Mathias1"
        email="edo@gmail.com"
        age={23}
      />
      <Image
        url="https://miro.medium.com/v2/resize:fit:1024/1*arUD7qluQ6zBoWtFbz5wWg.jpeg"
        width={200}
        height={200}
      />
      <List data={items} title="items list" />
      <Table headers={headers} data={tableData} />
      <Table headers={headers1} data={tableData1} />
    </>
  );
}

export default App;
