import { ReactNode } from "react";
import styles from "./Habilidade.module.css";

interface UIHabilidade {
  nome: string;
  icone: ReactNode;
}

export default function Habilidade({ icone, nome }: UIHabilidade) {
  return (
    <div className={styles.habilidade}>
      <div>
        <h1>{nome}</h1>
      </div>

      <div>{icone}</div>
    </div>
  );
}
