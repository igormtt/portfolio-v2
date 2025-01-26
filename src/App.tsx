import styles from "./App.module.css";
import Habilidade from "./components/Habilidade";
import Header from "./components/Header";
import { Typewriter } from "react-simple-typewriter";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNode,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { SiMongodb, SiNestjs, SiTypescript } from "react-icons/si";
import Projeto from "./components/Projeto";
import { useState } from "react";
import Footer from "./components/Footer";
import { RiNextjsFill } from "react-icons/ri";

export default function App() {
  const icons: React.ReactNode[] = [
    <FaHtml5 size={55} />,
    <FaCss3 size={55} />,
    <IoLogoJavascript size={55} />,
    <SiTypescript size={55} />,
    <FaReact size={55} />,
    <FaNode size={55} />,
    <DiMysql size={55} />,
    <SiMongodb size={55} />,
    <RiNextjsFill size={55} />,
    <SiNestjs size={55} />,
  ];

  const [nome, setNome] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [mensagem, setMensagem] = useState<string>();

  const words = ["E sou Desenvolvedor Full Stack"];

  const habilidades = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "MySql",
    "MongoDB",
    "Next",
    "Nest",
  ];

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.secao_1}>
          <div className={styles.texto}>
            <h1>
              Olá, me chamo <span>Igor</span>.
            </h1>

            <span className={styles.writer}>
              <Typewriter
                words={words}
                typeSpeed={90}
                deleteSpeed={40}
                cursor={true}
                cursorBlinking={true}
                cursorColor="black"
              />
            </span>

            <p className={styles.subtitle}>
              Desenvolvedor Full Stack, com habilidaes em React, Node JS,
              TypeScript e outras bibliotecas. Com desejo de entrar na área da
              programação.
            </p>

            <div className={styles.social}>
              <div className={styles.buttonCV}>
                <a
                  className={styles.buttonCV}
                  href="/Igor.pdf"
                  download="Igor Motta Geraldo.pdf"
                >
                  Baixar CV
                </a>
              </div>

              <div className={styles.techsICons}>
                <div className={styles.socialIcons}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/igor-motta-9588b4215/"
                  >
                    <FaLinkedin size={30} />{" "}
                  </a>
                </div>

                <div className={styles.socialIcons}>
                  <a target="_blank" href="https://github.com/igormtt">
                    <FaGithub size={30} />{" "}
                  </a>
                </div>

                <div className={styles.socialIcons}>
                  <a
                    target="_blank"
                    href="https://wa.me/5521996587072?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA!"
                  >
                    {" "}
                    <FaWhatsapp size={30} />{" "}
                  </a>
                </div>
              </div>
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
                  Me chamo Igor, tenho 20 anos e sou desenvolvedor web. Sou
                  técnico de Informática e estou atualmente me graduando, no 4º
                  semestre, em Análise e Desenvolvimento de Sistemas. Tenho
                  experiências em projetos com Node.js e React.js com
                  TypeScript, além de conhecimentos sólidos em HTML, CSS,
                  JavaScript, MySql e MongoDB. Estou começando meu estudos em
                  Python para aprimorar os meus conhecimentos cada vez mais.
                  Estou sempre em busca de novos conhecimentos e desafios, e
                  espero poder contribuir com o crescimento de sua empresa.
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
            <Projeto
              url="https://weather-app-ivory-eight-25.vercel.app/"
              image="/weather_app.png"
              key={Projeto.name}
            />
            <Projeto
              url="https://you-flix-app.vercel.app/"
              image="/you_flix.png"
              key={Projeto.name}
            />
            <Projeto
              url="https://to-do-react-sooty.vercel.app/"
              image="/todo_list.png"
              key={Projeto.name}
            />
            <Projeto
              url="https://disabled-imperio-facility.vercel.app/"
              image="/imperio.png"
              key={Projeto.name}
            />
            <Projeto
              url="https://advices-eight.vercel.app/"
              image="/advices.png"
              key={Projeto.name}
            />
            <Projeto
              url="https://portfolio-black-seven-24.vercel.app/"
              image="/old_portfolio.png"
              key={Projeto.name}
            />
          </div>
        </div>

        <div className={styles.trabalhos}>
          <div className={styles.trabalhos_title}>
            <h1>Freelancers</h1>
          </div>

          <div className={styles.projetos}>
            <Projeto
              image="/Arantes&Resende.png"
              url="https://arantesresende.com.br/"
              key={Projeto.name}
            />
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

                <input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome..."
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className={styles.form_container}>
                <div className={styles.label}>
                  <label htmlFor="email">E-mail</label>
                </div>

                <input
                  id="email"
                  type="text"
                  placeholder="Digite seu E-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.form_container}>
                <div className={styles.label}>
                  <label htmlFor="mensagem">Mensagem</label>
                </div>

                <textarea
                  id="mensagem"
                  placeholder="Digite sua mensagem..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                />
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
