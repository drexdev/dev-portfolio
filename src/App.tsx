import React from "react";
import Header from "./components/Header";
import styles from "./page.module.css"
import Social from "./components/Social";
import Code from "./components/Code";

import NestJsIcon from './assets/nestjs-icon.svg';
import NextJsIcon from './assets/next-js.svg';
import ReactIcon from './assets/react-2.svg';
import SassIcon from './assets/sass-1.svg';
import SCIcon from './assets/styled-components-1.svg';
import TSIcon from './assets/typescript.svg';

function App() {
  return (
    <React.Fragment>
      <Social />
      <Header />
      <div className={styles.emailFixed}>
        <a href='mailto:suporte@drexdev.tech'>suporte@drexdev.tech</a>
      </div>

      <section id='introduction' className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.textApresentation}>Olá, meu nome é</h3>
          <h1 className={styles.myName}>André Lucas!</h1>
          <h1 className={styles.whoAmI}>Sou desenvolvedor <span>Nest.JS</span> e <span>Next.JS</span>.</h1>
          <p className={styles.meDescription}>Sou desenvolvedor full-stack com foco em Nest.JS e NextJS. Minha ideia principal é tornar as coisas mais fáceis para os usuários e criar uma interface legal e amigável.</p>

          <div className={styles.buttonsContainer}>
            <a href='#' className={styles.buttonDownloadCV}>Download CV</a>
            <a href='#' className={styles.buttonContactUs}>Entrar em contato</a>
          </div>
        </div>

        <Code />
      </section>

      <section id='about' className={styles.sectionAbout}>
        <div className={styles.textSectionAboutContainer}>
          <h3 className={styles.sectionSubTitle}>#SOBRE</h3>
          <h1 className={styles.sectionTitle}>Conheça um pouco <span>sobre mim</span>.</h1>

          <p className={styles.descriptionAbout}>Olá! Eu sou <b>André</b>, tenho 17 anos e sou apaixonado por programação desde os meus 13 anos. Durante esse tempo venho experimentando e aprendendo várias <b>linguagens</b> e <b>tecnologias</b>.
            <br/>
            <br/>
            Atualmente meu foco principal no desenvolvimento é <b>NextJS</b> e <b>NestJS</b>, mas estou sempre diposto a aprender novas coisas.
          </p>

          <div className={styles.socialIcons}>
            <a href='/' className={styles.socialIcon} title='Instagram'>
              <i className='bx bxl-instagram'></i>
            </a>
            <a href='/' className={styles.socialIcon} title='GitHub'>
              <i className='bx bxl-github'></i>
            </a>
            <a href='/' className={styles.socialIcon} title='LinkedIn'>
              <i className='bx bxl-linkedin'></i>
            </a>
          </div>
        </div>

        <div>
          <h1 className={styles.sectionTitle}>Minhas <span>habilidades</span>.</h1>

          <div className={styles.skillsContainer}>
            <div className={styles.skillContainer}>
              <img src={NextJsIcon} alt='NextJS Logo' title='NextJS' />
            </div>
            <div className={styles.skillContainer}>
              <img src={NestJsIcon} alt='NestJS Logo' title='NestJS' />
            </div>
            <div className={styles.skillContainer}>
              <img src={TSIcon} alt='Typescript Logo' title='Typescript' />
            </div>
            <div className={styles.skillContainer}>
              <img src={SCIcon} alt='Styled Components Logo' title='StyledComponents' />
            </div>
            <div className={styles.skillContainer}>
              <img src={SassIcon} alt='Sass Logo' title='Sass' />
            </div>
            <div className={styles.skillContainer}>
              <img src={ReactIcon} alt='React Logo' title='React' />
            </div>
          </div>
        </div>
      </section>

      <section id='projects' className={styles.sectionProjects}>
        <div className={styles.infoSectionProjects}>
          <h3 className={styles.sectionSubTitle}>#PROJETOS</h3>
          <h1 className={styles.sectionProjectTitle}>Projetos <span>desenvolvidos</span>.</h1>
          <p className={styles.descriptionSectionProject}>Veja alguns dos projetos feito por mim.</p>
        </div>

        <div className={styles.projectsContainer}>
          <div>
            <div className={styles.imageProject} style={{ backgroundImage: 'url("https://camo.githubusercontent.com/5e41f16d419ce15527f04918a2c95a1c9fe024cedecfd8ab80fd3e1f08413d59/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313039343033313935333436353937343738372f313132313634363331343536393037363739362f32613061666530372d636661382d346530312d393763392d3861363339343837343236302e706e67")' }} />
            <div className={styles.descriptionProject}>
              <h1 className={styles.titleProject}>Gerador de senhas - SecureKey</h1>
              <p className={styles.moreDescriptionProject}>É um projeto que permite gerar senhas seguras com funcionalidades como adicionar símbolos, números e regenerar a senha. </p>
            </div>
            <div className={styles.linksToProject}>
              <a href='https://securekey-delta.vercel.app/' target='_blank' className={styles.linkToProject} title='Acessar link do projeto'>
                <i className='bx bx-link-external'></i>
              </a>
              <a href='https://github.com/drexdev/securekey' target='_blank' className={styles.linkToProject} title='Acessar GitHub do projeto'>
                <i className='bx bxl-github'></i>
              </a>
            </div>
          </div>

          <div className={styles.emptyProject}>
            <i className='bx bxs-x-circle'></i>

            <p>Ops... aqui não tem projeto, tome um café e aguarde um tempo. Em pouco tempo lançamos mais projetos.</p>
          </div>

          <div className={styles.emptyProject}>
            <i className='bx bxs-x-circle'></i>

            <p>Ops... aqui não tem projeto, tome um café e aguarde um tempo. Em pouco tempo lançamos mais projetos.</p>
          </div>
        </div>
      </section>

      <section id='contact' className={styles.sectionContact}>
        <div className={styles.contactButtons}>
          <a href='https://github.com/drexdev' className={`${styles.cardContainerContact} ${styles.cardContactGitHub}`} id='github'>
            <i className='bx bxl-github'></i>
          </a>
          <a href='https://www.linkedin.com/in/drexdev/' className={`${styles.cardContainerContact} ${styles.cardContactLinkedin}`} id='linkedin'>
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href='mailto:suporte@drexdev.tech' className={`${styles.cardContainerContact} ${styles.cardContactEmail}`} id='email' title='suporte@drexdev.tech'>
            <i className='bx bxs-envelope'></i>
          </a>
        </div>

        <div className={styles.contactTitle}>
          <h1 className={styles.titleSectionContact}>Entre em <span>contato</span>!</h1>
          <p className={styles.descriptionSectionProject}>Estou sempre aberto ao diálogo, <b>novas conexões</b>! Sinta a vontade para entrar em <b>contato comigo</b>.</p>
        </div>
      </section>
    </React.Fragment>
  )
}

export default App
