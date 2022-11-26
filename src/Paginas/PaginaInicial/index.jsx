import Banner from './banner.png'
import styles from './PaginaInicial.module.scss'

import Cabecalho from "componentes/Cabecalho"
import Menu from "componentes/Menu"
import Rodape from 'componentes/Rodape'
import Galeria from 'componentes/Galeria'
import Populares from 'componentes/Populares'

const PaginaInicial = () => {
    return (
        <>
            <Cabecalho placeholder='O que você procura?'></Cabecalho>
            <main>
                <section className={styles.principal}>
                    <Menu></Menu> 
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={Banner} alt="A imagem da Terra vista do espaço"></img>
                    </div>
                </section>

                <div className={styles.galeria}>
                    <Galeria></Galeria>
                    <Populares></Populares>
                </div>
            </main>
            <Rodape></Rodape>
        </>
    )
}

export default PaginaInicial