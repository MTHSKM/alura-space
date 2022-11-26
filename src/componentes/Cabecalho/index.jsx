import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

const Cabecalho = (props) => {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura Space"></img>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder={props.placeholder}></input>
                <img src={search} alt="Ícone de Lupa"></img>
            </div>
        </header>
    )
}

export default Cabecalho