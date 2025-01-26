import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.name}>
        <h1>Igor Motta</h1>
      </div>

      <div className={styles.social}>
        <div className={styles.social_icon}>
          <a
            href="https://www.linkedin.com/in/igor-motta-9588b4215/"
            target="_blank"
          >
            <FaLinkedin size={35} />
          </a>
        </div>

        <div className={styles.social_icon}>
          <a
            href="https://wa.me/5521996587072?text=Vim%20pelo%20seu%20portf%C3%B3lio%21%20Tenho%20uma%20proposta%20para%20voc%C3%AA."
            target="_blank"
          >
            <FaWhatsapp size={35} />
          </a>
        </div>

        <div className={styles.social_icon}>
          <a href="https://github.com/igormtt/" target="_blank">
            <FaGithub size={35} />
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        <p>&copy; 2024 copyright todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
