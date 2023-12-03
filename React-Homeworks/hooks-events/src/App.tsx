// App component
import { useState } from 'react';
import './App.css';
import { List } from './components/list/List';
import { ListData } from './types/item';

const leftListData: ListData[] = [
  { id: 'a', title: 'a' },
  { id: 'b', title: 'b' },
  { id: 'c', title: 'c' },
];
const rightListData: ListData[] = [
  { id: 'd', title: 'd' },
  { id: 'e', title: 'e' },
  { id: 'f', title: 'f' },
];

function App() {
  const [leftList, setLeftList] = useState<ListData[]>(leftListData);
  const [rightList, setRightList] = useState<ListData[]>(rightListData);

  const handleMoveLeft = () => {
    if (leftList.length === 0) {
      alert('Nothing left to move');
      return;
    }

    const itemToMove = leftList[leftList.length - 1];
    const newLeftList = leftList.slice(0, -1);
    setLeftList(newLeftList);
    setRightList([...rightList, itemToMove]);
  };

  const handleMoveRight = () => {
    if (rightList.length === 0) {
      alert('Nothing left to move');
      return;
    }

    const itemToMove = rightList[rightList.length - 1];
    const newRightList = rightList.slice(0, -1);
    setRightList(newRightList);
    setLeftList([...leftList, itemToMove]);
  };

  return (
    <>
      <div>
        <h2>Left List</h2>
        <List data={leftList} move={handleMoveLeft} />
        <hr />
        <h2>Right List</h2>
        <List data={rightList} move={handleMoveRight} />
      </div>
    </>
  );
}

export default App;
