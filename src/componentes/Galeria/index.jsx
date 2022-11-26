import React, { useState } from "react";
import Tags from "../Tags";
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from "./Cards";

const Galeria = () => {
    const [itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map((valor) => valor.tag))]

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto) =>  {
            return foto.tag === tag
        })

        setItens(novasFotos)
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela Galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}></Tags>
            <Cards itens={itens} styles={styles}></Cards>
        </section>
    )
}

export default Galeria