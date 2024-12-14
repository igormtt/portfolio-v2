import styles from './Projetos.module.css';

interface UIProjetos {
  image: string;
  techs: string;
  name: string;
  description: string;
}

export default function Projeto({ image, techs, name, description }: UIProjetos) {
  
  return(
    <div className={styles.projetos_container}>

      <div className={styles.projeto}>
        <div className={styles.image}>
          <img src={image} />
        </div>

        <div className={styles.info}>
          <h2>{name}</h2>
          <p>{description}</p>
          <span>Tecnologias: {techs}</span>
        </div>

        <div className={styles.links}>
          LINKS DEPLOY
        </div>

      </div>

    </div>
  );
}