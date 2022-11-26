import React from "react";
import twitter from "./twitter.svg"
import instagram from "./instagram.svg"
import styles from "./Rodape.module.scss"
import wp from "./wp.svg"

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://wa.me/5511944659427"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wp} alt="ícone do facebook" />
        </a>
        <a
          href="https://twitter.com/nsunb_mthK"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a
          href="https://www.instagram.com/nsunb_matheuskim/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por <span><a href="https://www.linkedin.com/in/matheus-kim-19b154251/" target="_blank" rel="noreferrer">Matheus Kim</a></span> em conjunto com a equipe <span><a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">Alura</a></span></p>
    </footer>
    )
}

export default Rodape