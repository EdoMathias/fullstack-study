import './App.css';
import { Card } from './components/card/Card';
import { Counter } from './components/counter/Counter';
import { FormData } from './components/formData/FormData';
import { UserData } from './components/userData/User-data';

function App() {
  return (
    <>
      <FormData />
      <Card header="card header" footer="card footer">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <button>Click me</button>
      </Card>
      <Counter />
      <UserData id={0} firstName={'Edo'} lastName={'Mathias'} />
    </>
  );
}

export default App;
