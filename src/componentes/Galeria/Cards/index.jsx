import React from "react";
import Card from "./Card";

const Cards = ({itens, styles}) => {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
            <Card key={item.id} item={item} styles={styles}></Card>
        )
      })}
    </ul>
  );
}

export default Cards