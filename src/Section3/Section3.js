import React from 'react'
import style from "../Section3/Section3.module.css"
import { IoIosCreate } from 'react-icons/io';
import {FiRefreshCw } from 'react-icons/fi';
import {FaChalkboardTeacher} from 'react-icons/fa';
function Section3() {
    return (
        <div className={style.container} >
            <div className={style.title}><h1>Niyə biz ?</h1></div>
            <div className={style.cards}>
                <div className={style.card}>
                    <div className={style.icon}>
                    <p><IoIosCreate/></p>
                    <h1>Karyera mərkəzi</h1>
                    </div>
                    
                </div>
                <div className={style.card}>
                    <div className={style.icon}>
                    <p><FiRefreshCw/></p>
                    <h1>Hər gün praktiki məşğələ</h1>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.icon}>
                    <p><FaChalkboardTeacher/></p>
                    <h1>Mentor dəstəyi</h1>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Section3