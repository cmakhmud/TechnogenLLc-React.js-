import React from 'react'
import style from "../Section4/Section4.module.css"
function Section4() {
    return (
        <div className={style.bgimage}>
            <div className={style.bgcolor}>
                <div className={style.title}><h1>Devcenter həm arzuladığınız sahəni əlçatan edir,
                    həm də gələcək karyera inkişafınız üçün lazımı bilik və bacarıqları formalaşdırır.</h1></div>
                <div className={style.numbers}>
                    <div className={style.number}>
                     <h1>200</h1>
                     <p>telebe</p>
                    </div>
                    <div className={style.number}>
                     <h1>50</h1>
                     <p>karyerasını yaxşılaşdırıb</p>
                    </div>
                    <div className={style.number}>
                     <h1>20</h1>
                     <p>rəhbər vəzifələrdə işləyir</p>
                    </div>
                    <div className={style.number}>
                     <h1>10</h1>
                     <p>vəzifəsi artıb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4