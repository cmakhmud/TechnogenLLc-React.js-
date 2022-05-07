import React from 'react'
import style from "../Section12/Section12.module.css"
import image from "../image/22.png"
function Section12() {
    return (
        <div className={style.bgcolor}>
            <div className={style.shadow}>
                <div className={style.box}>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <div className={style.text1}>
                                <p>Proqramlaşdırma – ona yüksək həvəs olduqdan sonra evdə də öyrənilə biləcək sahələrdən biridir. Kod yazmağa həvəs, sevgi, indiyədək yüz minlərlə proqramçının hər hansı kursa getmədən öyrənməsinə səbəb olub. Bəs öz özünə proqramlasdirma oyrenmek və ya kurslara müraciət etmək arasında nə kimi fərqlər var ?</p>
                            </div>
                            <div className={style.text2}>
                                <h1>Kimlər self-study (öz-özünə öyrənmə) edə bilər ?</h1>
                                <p>1) Normadan yüksək fokuslanma qabiliyyəti olanlar</p>
                                <p>2) Bir neçə ay ardıcıl olaraq gün ərzində 4 saat aralıqsız öyrənməyə vaxt ayıra bilənlər</p>
                                <p>3) Sual yaranacağı halda ətrafında soruşa biləcəyi proqramçı tanışları olanlar</p>
                                <p>4) İngilis dili bilikləri əla səviyyədə olanlar</p>
                            </div>
                            <div className={style.text2}>
                                <h1>Proqramlaşdırma kursları hansı hallarda daha yaxşı seçimdir ?</h1>
                                <p>1) Hazırda tələbə olanlar və ya işləyənlər</p>
                                <p>2) Sualı yarandıqda dərhal cavab almaq istəyənlər</p>
                                <p>3) Xətaları olduqda onların dərhal yoxlanılıb bildirilməsini istəyənlər</p>
                                <p>4) CV-sinə əlavə daha bir peşə sertifikatı artırmaq istəyənlər</p>
                                <p>5) Eyni mühitdə başqa proqramçılarla birgə əylənərək öyrənmək istəyənlər</p>
                                <p>6) Yerli şirkətlərdən daha tez iş təklifi almaq istəyənlər</p>
                                <p>7) Ev şəraitində fokuslanmaqda çətinlik çəkənlər</p>
                                <p>8) Proqramlaşdırmanı qısa vaxtda öyrənmək istəyənlər</p>
                                <p>9) Müəllim və ya kurs tərəfindən iş təkliflərində tövsiyyə almaq istəyənlər</p>
                                <p>10) Ödənişsiz karyera məsləhətləri almaq istəyənlər</p>
                            </div>
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

export default Section12