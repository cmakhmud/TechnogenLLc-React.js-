import React from 'react'
import style from "../Section33/Section33.module.css"
import image from "../image/35.jpg"
function Section33() {
  return (
    <div className={style.container}>
    <div className={style.body}>
      <div className={style.cards} >
        <div className={style.text}>
          <h1>Biz təcrübə vasitəsilə peşəkar İT bacarıqları inkişaf etdirən kompleks təhsil proqramı hazırlamışıq.</h1>
          <p>DEV Center ixtisaslaşmış kurslar üzərindən xidmət göstərən və tələbələri peşəkar sertifikatla təmin edən təlim və inkişaf mərkəzidir. Həmçinin şirkətlərin inkişafı üçün biznes plan və strateji yol xəritələrinin, insan resursları strategiyasının hazırlanması, işə qəbul və seçim mərhələsinin aparılması, performans idarə etmə sisteminin qurulması, kadr kargüzarlığı üzrə audit işlərinin edilməsi, maliyyə və mühasibatlıq, IT şəbəkə və sistem infrastrukturunun qurulması, personalın reqamsal idarə olunması, rəqəmsal marketinq və SMM xidmətləri göstərir.</p>
          <p>"Proqram təminatının hazırlanması" kursunun səmərəliliyini STEP IT Academy-nin minlərlə məzunları – dünyanın 36 ölkəsindəki iri İT şirkətlərdə işləyən ixtisaslı proqramçıları təsdiq edir.</p>
        </div>
        <div>
          <div className={style.card}>
            <img src={image} />
          </div>
          <div className={style.card}>
            <img src={image} />
          </div>
        </div>
        <div>
          <div className={style.card}>
            <img src={image} />
          </div>
          <div className={style.card}>
            <img src={image} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section33