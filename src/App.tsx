import styles from './App.module.css'
import Habilidade from './components/Habilidade';
import Header from "./components/Header";
import { Typewriter } from 'react-simple-typewriter'
import { FaReact, FaHtml5 } from "react-icons/fa";

export default function App() {

  const icons:React.ReactNode= [
    <FaReact size={35} />,
    <FaHtml5 size={35} />,
  ]

  const words = ['Desenvolvedor Web', 'Desenvolvedor Node / React', 'Técnico de TI']

  const habilidades = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Node.js", "MySql", "MongoDB"];

  return(
    <>
      <Header />

      <div className={styles.container}>

        <div className={styles.secao_1}>
          
          <div className={styles.texto}>
            <h1>
              Olá, <br/> me chamo <span>Igor</span>.
            </h1>

            <span className={styles.writer}>
              <Typewriter words={words} typeSpeed={90} deleteSpeed={90} loop={true} cursor={true} cursorBlinking={true} cursorColor='violet' />
            </span>
                        <div>
                          CV 
                        </div>
          </div>     

          <div className={styles.image}>
            <img src="/sain.jpg" />
          </div>

        </div>

        <div className={styles.sobre}>

          <div className={styles.titulo_sobre}>
            <h1>Sobre mim</h1>
          </div>

          <div className={styles.apresentacao}>

            <div className={styles.image_desc}>
              <img src="/sain.jpg" />
            </div>

            <div className={styles.descricao}>
              
              <div className={styles.titulo_desc}>
                <h2>Olá!</h2>
              </div>

              <div className={styles.paragrafo_desc}>
                <p>
                  Me chamo Igor, tenho 20 anos e sou desenvolvedor web.
                  Sou técnico de Informática e estou atualmente me graduando, no 4º semestre, em Análise e Desenvolvimento de Sistemas.
                  Tenho experiências em projetos com Node.js e React.js com TypeScript, além de conhecimentos sólidos em HTML, CSS, JavaScript, MySql e MongoDB.
                  Estou começando meu estudos em Python para aprimorar os meus conhecimentos cada vez mais.
                  Estou sempre em busca de novos conhecimentos e desafios, e espero poder contribuir com o crescimento de sua empresa.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className={styles.skills}>
          
          <div className={styles.skills_sobre}>
            <h1>Minhas Habilidades</h1>
          </div>

          <div className={styles.skills_container}>
            {habilidades.map((habilidade, index) => (
              <Habilidade key={index} nome={habilidade} icone={icons[index]} />
            ))}
          </div>

        </div>

      </div>
    </>
  );
}
