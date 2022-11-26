import React from 'react';
import style from './Menu.module.scss';
import icones from './icones.json';

export default function Menu() {
  return (
    <nav className={style.menu}>
      <ul className={style.menu__lista}>

        {icones.map((icone)=> {
            return(
                <li className={style.menu__item}>
                <img src={icone.path} alt={icone.alt} />
                <a href="/">{icone.link}</a>
              </li>
            )
        })}

      </ul>
    </nav>
  )
}