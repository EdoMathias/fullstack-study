import { Card } from './components/Card/Card';
import { SiteHeader } from './components/site-header/SiteHeader';
import { NavMenu } from './components/navigation-menu/NavMenu';
import { Footer } from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <NavMenu />
        <Card
          header="header1"
          imageUrl="https://styles.redditmedia.com/t5_7zg4gb/styles/communityIcon_ejyjphmygm5b1.png"
          moreInfoLink="https://www.alanwake.com/"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
