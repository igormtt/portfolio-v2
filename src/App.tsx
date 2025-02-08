import styles from "./App.module.css";
import Habilidade from "./components/Habilidade/Habilidade";
import Header from "./components/Header/Header";
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
import Projeto from "./components/Projeto/Projeto";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import { RiNextjsFill } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { Toaster, toast } from "react-hot-toast";

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

  async function contactForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!nome || !email || !mensagem) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Favor, preencher o e-mail corretamente.");
      return;
    }

    const message = `Olá, meu nome é ${nome}. \nE-mail: ${email} \nMensagem: ${mensagem}`;
    const whatsappURL = `https://wa.me/5521996587072?text=${encodeURIComponent(
      message
    )}`;

    toast.success("Redirecionando...");

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 1500);
  }

  return (
    <>
      <Header />

      <div id="secao_1" className={styles.container}>
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
              Desde Junho de 2022 estou aprimorando minhas habilidades em
              JavaScript, TypeScript, React, Node, MySql, MongoDB, Next e Nest.
              E agora, estou começando os meus estudos em AWS.
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
            <img src="/social2.jpg" />
          </div>
        </div>

        <div id="sobre" className={styles.sobre}>
          <div className={styles.titulo_sobre}>
            <h1>Sobre Mim</h1>
          </div>

          <div className={styles.apresentacao}>
            <div className={styles.image_desc}>
              <img src="/Logo Igor Motta.png" />
            </div>

            <div className={styles.descricao}>
              <div className={styles.paragrafo_desc}>
                <p>
                  Sou desenvolvedor web e técnico de Informática, atualmente
                  cursando o 4º semestre de Análise e Desenvolvimento de
                  Sistemas. Tenho experiência prática em projetos com{" "}
                  <strong>Node.js e React.js utilizando TypeScript</strong>,
                  além de conhecimentos sólidos em HTML, CSS, JavaScript, MySQL
                  e MongoDB. No momento, estou aprofundando meus estudos em{" "}
                  <strong> Next e AWS </strong> para ampliar minhas habilidades
                  técnicas. Sou apaixonado por tecnologia e desenvolvimento web,
                  sempre buscando novos desafios que me permitam aprender e
                  contribuir com soluções inovadoras.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className={styles.skills}>
          <div className={styles.skills_sobre}>
            <h1>Minhas Habilidades</h1>
          </div>

          <div className={styles.skills_container}>
            {habilidades.map((habilidade, index) => (
              <Habilidade key={index} nome={habilidade} icone={icons[index]} />
            ))}
          </div>
        </div>

        <div id="projetos_container" className={styles.projetos_container}>
          <div className={styles.projetos_title}>
            <h1>Projetos</h1>
          </div>

          <div className={styles.projetos}>
            <Projeto
              url="https://weather-app-ivory-eight-25.vercel.app/"
              image="/weather_app.png"
            />
            <Projeto
              url="https://you-flix-app.vercel.app/"
              image="/you_flix.png"
            />
            <Projeto
              url="https://to-do-react-sooty.vercel.app/"
              image="/todo_list.png"
            />
            <Projeto
              url="https://disabled-imperio-facility.vercel.app/"
              image="/imperio.png"
            />
            <Projeto
              url="https://advices-eight.vercel.app/"
              image="/advices.png"
            />
            <Projeto
              url="https://portfolio-black-seven-24.vercel.app/"
              image="/old_portfolio.png"
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

        <div id="form_container" className={styles.contato}>
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
                  placeholder="Digite seu nome"
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
                  type="email"
                  placeholder="Digite seu E-mail"
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
                  placeholder="Como posso ajudar?"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                />
              </div>

              <div className={styles.btn}>
                <button type="submit" onClick={contactForm}>
                  {" "}
                  Enviar <BsSend size={19} />{" "}
                </button>
              </div>
              <Toaster position="top-left" />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
