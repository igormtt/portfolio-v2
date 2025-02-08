import styles from "./Projetos.module.css";

interface UIProjetos {
  image: string;
  url: string;
}

export default function Projeto({ image, url }: UIProjetos) {
  return (
    <div className={styles.projetos_container}>
      <div className={styles.projeto}>
        <a href={url} target="_blank">
          <div className={styles.image}>
            <img src={image} />
          </div>
        </a>
      </div>
    </div>
  );
}
