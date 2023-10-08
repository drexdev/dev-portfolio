import React from "react";
import Header from "./components/Header";
import styles from "./page.module.css"
import Social from "./components/Social";
import Code from "./components/Code";

function App() {
  return (
    <React.Fragment>
      <Social />
      <Header />
      <div className={styles.emailFixed}>
        <p>suporte@drexdev.tech</p>
      </div>

      <section id='introduction' className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.textApresentation}>Olá, meu nome é</h3>
          <h1 className={styles.myName}>André Lucas!</h1>
          <h1 className={styles.whoAmI}>Sou desenvolvedor <span>Nest.JS</span> e <span>Next.JS</span>.</h1>
          <p className={styles.meDescription}>Sou desenvolvedor full-stack com foco em Nest.JS e NextJS. Meu objetivo é desenvolver produtos acessíveis e intuitivos, colocando o usuário no centro do processo.</p>

          <div className={styles.buttonsContainer}>
            <a href='#' className={styles.buttonDownloadCV}>Download CV</a>
            <a href='#' className={styles.buttonContactUs}>Entrar em contato</a>
          </div>
        </div>

        <Code />

      </section>


    </React.Fragment>
  )
}

export default App
