import './footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Recipez</h3>
        <p>A recipe site to create and save your favorite recipes</p>
        <ul className="socials">
          <li>
            <a href="#">Google</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Linkdin</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
