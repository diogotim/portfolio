import styles from "../styles/Header.module.css";
import layoutStyles from "../styles/Layout.module.css";

const Header = () => {
  return (
    <header className={layoutStyles.container}>
      <nav className={styles.header}>
        <ul>
          <li>
            <a href="#who">who</a>
          </li>
          <li>
            <a href="#education">education</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
