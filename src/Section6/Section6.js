import React from 'react'
import style from "../Section6/Section6.module.css"
import image from "../image/2.png"
function Section7() {
    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.formBx}>
                    <form>
                        <h2>Müraciət edin</h2>
                        <div className={style.inputBox}>
                            <input type="text" name="" required />
                            <span>Ad və Soyad</span>
                        </div>
                        <div className={style.inputBox}>
                            <input type="email" name="" required />
                            <span>Email</span>
                        </div>
                        <div className={style.inputBox}>
                            <input type="number" name="" required />
                            <span>Əlaqə nömrəsi</span>
                        </div>
                        <div className={style.inputBox}>
                            <textarea required ></textarea>
                            <span>Mesajınız bura yazın...</span>
                        </div>
                        <div className={style.inputBox}>
                          <button type='submit' >Göndərin</button>
                        </div>
                    </form>
                </div>
                <div className={style.imgBx}>
                 <img src={image} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Section7