// import { AiOutlineExport } from 'react-icons/ai';
import styles from './Projetos.module.css';
// import { FaGithub } from 'react-icons/fa';

interface UIProjetos {
  image: string;
  techs?: string;
  name?: string;
  description?: string;
  url?: string;
}

export default function Projeto({ image }: UIProjetos) {
  
  return(
    <div className={styles.projetos_container}>

      <div className={styles.projeto}>
        <div className={styles.image}>
          <img src={image} />
        </div>

        {/* <div className={styles.info}>
          <h2>{name}</h2>
          <p>{description}</p>
          <span>Tecnologias: {techs}</span>
        </div>

        <div className={styles.links}>
          <div className={styles.link_deploy}>
            Ver site: <a href={url} target='_blank'><AiOutlineExport /></a>
          </div>

          <div className={styles.link_deploy}>
            Ver código: <FaGithub  />
          </div>
        </div> */}

      </div>

    </div>
  );
}