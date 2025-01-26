import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <div className={styles.link}>
            <a href="#">Home</a>
          </div>
          <div className={styles.link}>
            <a href="#">Sobre</a>
          </div>
          <div className={styles.link}>
            <a href="#">Skills</a>
          </div>
          <div className={styles.link}>
            <a href="#">Projetos</a>
          </div>
          <div className={styles.link}>
            <a href="#">Contato</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
