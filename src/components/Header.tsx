import styles from './Header.module.css'

export default function Header() {
  return(
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          LOGO
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

        </div>
      </div>
    </header>
  );
}