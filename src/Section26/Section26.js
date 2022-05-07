import React from 'react'
import style from "../Section26/Section26.module.css"
function Section26() {
    return (
        <div className={style.container}>
            <div className={style.body}>
                <div className={style.title}>
                    <h1>Aktuallıq, peşəkarlıq, qayğı</h1>
                    <p>DEVCENTER-də təhsil effektiv tədrisin üç əsas zəruri tərkib hissəsinə əsaslanır.</p>
                </div>
                <div className={style.cards}>
                    <div className={style.card}>
                        <i class="fa-solid fa-graduation-cap"></i>
                        <div className={style.text}>
                          <h1>Aktual proqram</h1>
                          <p>Bizim tələbələrin aldığı bilik və bacarıqlar şirkətlərin bu günkü və gələcək tələblərinə uyğun olmalıdır. Buna görə də biz hər altı aydan bir kurs proqramlarına baxır və onları yeniləyirik.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                    <i class="fa-solid fa-user"></i>
                        <div className={style.text}>
                          <h1>Müəllim-praktiklər</h1>
                          <p>DEVCENTER-in müəllimləri – aparıcı İT şirkətlərin minimum 5 il iş təcrübəsi olan mütəxəssisləridir. Dərslərdə tələbələr real praktikadan yalnız aktual bilikləri əldə edirlər.</p>
                        </div>
                    </div>
                    <div className={style.card}>
                    <i class="fa-solid fa-user-group"></i>
                        <div className={style.text}>
                          <h1>Dost mühit</h1>
                          <p>Biz müəllim və tələbələrin eyni səviyyədə ünsiyyət qura biləcəyi xüsusi təhsil mühiti yaratmışıq. Bizim təhsil otaqlarımız və laboratoriyalarımız rahat iş yerləri, kompüter texnikaları və lisenziyalı proqram təminatları ilə təchiz edilib.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section26