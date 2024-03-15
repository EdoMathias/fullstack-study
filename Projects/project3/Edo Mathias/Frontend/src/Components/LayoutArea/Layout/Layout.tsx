import { appStore } from '../../../Redux/Store';
import Copyrights from '../Copyrights/Copyrights';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Routing from '../Routing/Routing';
import './Layout.css';

function Layout(): JSX.Element {
  const user = appStore.getState().user;

  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <main>
        <Routing />
      </main>
      <footer>
        <Copyrights />
      </footer>
    </div>
  );
}

export default Layout;
