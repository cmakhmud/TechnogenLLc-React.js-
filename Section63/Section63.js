import React from 'react'
import style from "../Section63/Section63.module.css"
import { NavLink } from 'react-router-dom'
function Section63() {
    return (
        <div className={style.bgimage}>
        <div className={style.bgcolor}>
            <div className={style.text}>
                <h1>ADOBE ILLUSTRATOR</h1>
                <p>Biz inanırıq ki, hər kəs IT mütəxəssisi ola bilər.Bu məqsədə çatmaq üçün sizdən yalnız istək, səy və intizam tələb olunur.Qalanını biz öz üzərimizə götürürük</p>
                <div className={style.but}>
                 <NavLink to={"/"}>Müraciət edin</NavLink>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Section63