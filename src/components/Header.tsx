import { RiMoonFill } from 'react-icons/ri';
import { BsFillSunFill } from "react-icons/bs";
import styles from './Header.module.css'
import { useState } from 'react';

export default function Header() {
  
  const [theme, setTheme] = useState<string>("light");

   const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log('Tema mudado')
  }

  
  return(
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <p>Igor {"</>"}</p>
        </div>

        <div className={styles.links}>
          <div className={styles.link}>
            <a href="">Home</a>
          </div>

          <div className={styles.link}>
            <a href="">Sobre</a>
          </div>

          <div className={styles.link}>
            <a href="">Skills</a>
          </div>

          <div className={styles.link}>
            <a href="">Projetos</a>
          </div>

          <div className={styles.link}>
            <a href="">Contato</a>
          </div>
        </div>

        <div className={styles.changeTheme}>
          <div onClick={changeTheme}>
            {theme === "light" ? <RiMoonFill size={30} /> : <BsFillSunFill size={30} /> }
          </div>
        </div>
      </div>
    </header>

  );
}