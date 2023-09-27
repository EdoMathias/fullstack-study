import './App.css';
import { Image } from './components/Image';
import { List } from './components/List';

function App() {
  return (
    <>
      <Image></Image>
      <div>Hello World</div>
      <List></List>
      <div className="div2">Hello World 2</div>
      <Image></Image>
    </>
  );
}

export default App;

/* Rules of JSX
  1. Component functions must start in Uppercase!!
  2. Only 1 parent element in each Component function
  3. Can wrap elements with empty tag (<>)
  4. Attributes seperated with dash must be written in camelCase (eg. strokeWidth)
  5. Class attribute must be writter as className
  6. Must close HTML tags!
*/
