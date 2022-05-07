import React from 'react'
import style from "../Section11/Section11.module.css"
import { NavLink } from 'react-router-dom'
function Section11() {
    return (
        <div className={style.bgimage}>
            <div className={style.bgcolor}>
                <div className={style.text}>
                    <h1>Kursa getmədən proqramlaşdırma öyrənmək</h1>
                    <div className={style.but}>
                     <NavLink to={"/"}>Müraciət edin</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section11