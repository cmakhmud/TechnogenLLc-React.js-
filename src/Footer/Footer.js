import React from 'react'
import style from "../Footer/Footer.module.css"
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
function Footer() {
    return (
        <div className={style.body}>
            <footer>
                <div className={style.container}>
                    <div className={style.sec} id={style.aboutus}>
                        <h2>Haqqımızda</h2>
                        <p>
                            DEV Center ixtisaslaşmış kurslar üzərindən xidmət göstərən və tələbələri peşəkar sertifikatla təmin edən təlim və inkişaf mərkəzidir.</p>
                        <ul className={style.sci}>
                            <li><a href='#'><FaFacebookF /></a></li>
                            <li><a href='#'><BsInstagram /></a></li>
                            <li><a href='#'><FaLinkedinIn /></a></li>
                            <li><a href='#'><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                    <div className={style.sec} id={style.quickLinks}>
                        <h2>Sürətli keçid</h2>
                        <ul className={style.top}>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Faq</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Help</a></li>
                            <li><a href='#'>Terms & Consitions</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <div className={style.sec} id={style.contact} >
                        <h2>Əlaqə Məlumatı</h2>
                        <ul className={style.info}>
                            <li>
                                <span className={style.email1}><FaMapMarkerAlt /></span>
                                <span>Bakı şəh, Nəsimi ray<br />Şamil Əzizbəyov 140küç <br />(Jalə Plaza)</span>
                            </li>
                            <li>
                                <span className={style.email2}><BsFillTelephoneFill /></span>
                                <p><a href='tel:994 55 3437703'>994 55 3437703</a><br />
                                    <a href='tel:994 55 3437703'>994 55 3437703</a></p>
                            </li>
                            <li>
                                <span className={style.email3}><MdEmail /></span>
                                <p><a href='mailto:office@devcenter.az'>office@devcenter.az</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={style.copyrightText}>
                <p>© 2022 TECHNOGEN LLC. Bütün hüquqlar qorunur.</p>
            </div>
        </div>
    )
}

export default Footer