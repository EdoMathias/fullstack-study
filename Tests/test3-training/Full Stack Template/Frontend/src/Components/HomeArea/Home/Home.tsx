import './Home.css';
import imageSource from '../../../Assets/Images/gift-shop.jpg';

function Home(): JSX.Element {
  return (
    <div className="Home">
      <img src={imageSource} className="w-25" />
      <p>
        Nestled in the heart of Old Jaffa's enchanting cultural hub, as close as
        possible to the deck of the renewed port, lies "Adina Plastelina", a
        workshop that opened its doors in 2004. "Adina Plastelina" brings to
        life the ancient Milefiori technique, using precious metals & polymer
        clay, to create timeless and prestigious hand-made jewelry. A visit to
        this unique gallery includes guidance and viewing of a hypnotic
        demonstration video along with watching the creation process live. The
        Mysterious room of "Adina Plastelina":In the year 2006, during
        archaeological excavations in the gallery, the ruins of a round ancient
        structure were revealed. The many and varied incredible archaeological
        artifacts that were discovered serve as a testimony to the lives and
        activities of local residents - who have influenced the history of
        Israel for 3,500 years, spanning from the late-Bronze Age until
        today.The exhibition is permanent and open to all with no charge.
      </p>
    </div>
  );
}

export default Home;
