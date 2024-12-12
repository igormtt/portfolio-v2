import styles from './App.module.css'
import Header from "./components/Header";

const strings = ["Dev. Web", "Freelancer", "Estudante"]


export default function App() {
  return(
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Olá, meu nome é Igor e eu sou desenvolvedor Web!</h1>
        </div>

        <div className={styles.image}>
          <img src="/sain.jpg" />
        </div>
      </div>
    </>
  );
}
