import styles from './App.module.css'
import Habilidade from './components/Habilidade';
import Header from "./components/Header";
import { Typewriter } from 'react-simple-typewriter'
import { FaReact, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql } from 'react-icons/di';
import { SiMongodb, SiTypescript } from 'react-icons/si';
import Projeto from './components/Projeto';
import { useState } from 'react';
import Footer from './components/Footer';

export default function App() {

  const icons:React.ReactNode[] = [
    <FaHtml5 size={35} />,
    <FaCss3 size={35} />,
    <IoLogoJavascript size={35} />,
    <SiTypescript size={35}/>,
    <FaReact size={35} />,
    <FaNode size={35} />,
    <DiMysql size={35} />,
    <SiMongodb size={35} />
  ]

  const [ nome, setNome ] = useState<string>();
  const [ email, setEmail ] = useState<string>();
  const [ mensagem, setMensagem ] = useState<string>();

  const words = ['Desenvolvedor Web', 'Desenvolvedor Node / React', 'Técnico de TI']

  const habilidades = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Node.js", "MySql", "MongoDB"];

  return(
    <>
      <Header />

      <div className={styles.container}>

        <div className={styles.secao_1}>
          
          <div className={styles.texto}>
            <h1>
              Olá, me chamo <span>Igor</span>.
            </h1>

            <span className={styles.writer}>
              <Typewriter words={words} typeSpeed={90} deleteSpeed={90} loop={true} cursor={true} cursorBlinking={true} cursorColor='violet' />
            </span>

          <div>
            <button className={styles.curriculo}>Baixar CV</button>             
          </div>     

          </div>


          <div className={styles.image}>
            <img src="/sain.jpg" />
          </div>

        </div>

        <div className={styles.sobre}>

          <div className={styles.titulo_sobre}>
            
            <h1>Sobre mim</h1>
            
            <div className={styles.hr}>
              <hr />
            </div>
            
          </div>

          <div className={styles.apresentacao}>

            <div className={styles.image_desc}>
              <img src="/sain.jpg" />
            </div>

            <div className={styles.descricao}>

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

        <div className={styles.projetos_container}>
          
            <div className={styles.projetos_title}>
              <h1>Projetos</h1>
            </div>

            <div className={styles.projetos}>
              <Projeto image='/weather_app.png' key={Projeto.name} />
              <Projeto image='/you_flix.png'  key={Projeto.name} />
              <Projeto image='/todo_list.png' key={Projeto.name} />
              <Projeto  image='/imperio.png' key={Projeto.name} />
              <Projeto image='/advices.png'  key={Projeto.name} />
              <Projeto  image='/old_portfolio.png' key={Projeto.name} />
            </div>

        </div>

        <div className={styles.trabalhos}>
            
          <div className={styles.trabalhos_title}>
            <h1>Trabalhos como Freelancer</h1>
          </div>

          <div className={styles.projetos}>
          <Projeto description="Site feito em parceria com o dono do escritório de advocacia. Uma landing page interativa, moderna e atraente. Faz captação dos dados dos possíveis clientes por um formulário." image='/Arantes&Resende.png' name='Arantes & Resende' techs='Wordpress, Starter templates, Wp-Forms, Yoast-Seo...' url='https://arantesresende.com.br/' key={Projeto.name} />
          </div>

        </div>

        <div className={styles.contato}>
         
          <div className={styles.contato_title}>
            <h1>Entre em contato!</h1>
          </div>

          <div className={styles.formulario}>

            <form action="">

              <div className={styles.form_container}>

                <div className={styles.label}>
                  <label htmlFor="nome">Nome</label>
                </div>

                <input id="nome" type="text" placeholder='Digite seu nome...' value={nome} onChange={(e) => setNome(e.target.value)} />

              </div>

              <div className={styles.form_container}>

                <div className={styles.label}>
                  <label htmlFor="email">E-mail</label>
                </div>

                <input id="email" type="text" placeholder='Digite seu E-mail...' value={email} onChange={(e) => setEmail(e.target.value)} />

              </div>

              <div className={styles.form_container}>

                <div className={styles.label}>
                  <label htmlFor="mensagem">Mensagem</label>
                </div>

                <textarea id="mensagem" placeholder='Digite sua mensagem...' value={mensagem} onChange={(e) => setMensagem(e.target.value)} />

              </div>

              <div className={styles.btn}>
                <button>Enviar</button>
              </div>

            </form>

          </div>

        </div>

      </div>

      <Footer /> 
    </>
  );
}
