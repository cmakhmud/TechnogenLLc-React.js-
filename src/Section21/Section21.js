import React from 'react'
import style from "../Section21/Section21.module.css"
import image from "../image/26.jpg"
import image1 from "../image/27.jpg"
import image2 from "../image/28.jpg"
function Section21() {
  return (
    <div className={style.body}>
    <div className={style.main}>
        <div className={style.box}>
            <div className={style.boximg}>
                <img src={image} />
            </div>
            <div className={style.content}>
                <h3>SOURCE CODE</h3>
                <p>IMDB 7.5/10</p>
                <div className={style.text}>
                    <p>Colter Stevens (Jake Gyllenhaal) oyananda şəhərətrafı qatarda özünü başqasının bədənində tapır və 8 dəqiqə sonra qatar partlayır. Gözlərini açanda yenə öz bədənində olur. Bu, hökumət tərəfindən hazırlanmış “həyat kodu” adlı proqramla təmin edilir.Bu proqram sizə başqa bir insanın şəxsiyyətini ötürməyə və onun həyatının son səkkiz dəqiqəsini yaşamağa imkan verir.</p>
                </div>
            </div>
            <div id={style.but1} className={style.button}>
                <li><a className={style.b1} href='#'>İzləyin</a></li>
            </div>
        </div>
        <div className={style.box}>
            <div className={style.boximg}>
                <img src={image1} />
            </div>
            <div className={style.content}>
                <h3>JOBS</h3>
                <p>IMDB 6.0/10</p>
                <div className={style.text}>
                 <p>Stiv Cobs kollecdən ayrılır və övladlığa götürən ailəsi ilə birlikdə yaşamaq üçün Kaliforniyaya qayıdır. Bu addım təkcə öz sərvətini deyil, həm də texnologiya dünyasının taleyini formalaşdıracaq mühüm bir addım yaradır. Jobs dostu Steve Wozniak ilə ailəsinin qarajında ​​gördüyü işlərlə Apple Computer adlı texnologiya nəhəngini quranda artıq heç bir şey əvvəlki kimi olmayacaqdı.</p>
                </div>
            </div>
            <div id={style.but1} className={style.button}>
                <li><a className={style.b1} href='#'>İzləyin</a></li>
            </div>
        </div>
        <div className={style.box}>
            <div className={style.boximg}>
                <img src={image2} />
            </div>
            <div className={style.content}>
                <h3>THE SOCIAL NETWORK</h3>
                <p>IMDB 7.8/10</p>
                <div className={style.text}>
                <p>Bir oktyabr gecəsi, 2003-cü ildir. Mark Zukerberq sərxoş başı ilə Harvard Universitetinin sisteminə sızır. O, sevgilisi tərəfindən atılıb və ağrısını kampusdakı bütün qızların məlumat bazasında birləşdirmək istəyir. Onun yazdığı ərizədə ekranın hər iki tərəfində qızların fotolarına səs verməklə hansının daha gözəl olduğunu seçmək mümkündür. Mark səhifəni Facemash adlandırır.</p>
                </div>
            </div>
            <div id={style.but1} className={style.button}>
                <li><a className={style.b1} href='#'>İzləyin</a></li>
            </div>
        </div>
    </div>
</div>

  )
}

export default Section21