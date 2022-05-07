import React from 'react'
import style from "../Section48/Section48.module.css"
import { NavLink } from 'react-router-dom'
function Section48() {
  return (
    <div className={style.bgimage}>
    <div className={style.bgcolor}>
        <div className={style.text}>
            <h1>IOT SECURITY</h1>
            <p>Biz inanırıq ki, hər kəs IT mütəxəssisi ola bilər.Bu məqsədə çatmaq üçün sizdən yalnız istək, səy və intizam tələb olunur.Qalanını biz öz üzərimizə götürürük</p>
            <div className={style.but}>
             <NavLink to={"/"}>Müraciət edin</NavLink>
            </div>
        </div>
    </div>
</div>
  )
}

export default Section48