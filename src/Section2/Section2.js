import React from 'react'
import style from "../Section2/Section2.module.css"
import { NavLink } from 'react-router-dom';
import { MdSecurity } from 'react-icons/md';
function Section2() {
    return (
        <div className={style.bgcolor}>
            <div className={style.container}>
                <div className={style.title}>
                    <h1>Gələcəyini inşa etmək istəyirsən?</h1>
                </div>
                <div className={style.cards}>
                    <NavLink to={"/itessentials"}>
                        <div className={style.card}>
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                            <p>IT ESSENTIALS</p>
                        </div>
                    </NavLink>
                    <div className={style.card}>
                        <i className="fa-solid fa-globe"></i>
                        <p>CCNA V7</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-shield"></i>
                        <p>Cybersecurity Essentials</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-brands fa-linux"></i>
                        <p>NDG LINUX</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-gears"></i>
                        <p>System Administration</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-brands fa-python"></i>
                        <p>PCAP-Python Essentials</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-laptop-code"></i>
                        <p>CLI-Programming Essentials in C,C++</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-computer"></i>
                        <p>CLP-Advanced Programming in C,C++</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-chart-line"></i>
                        <p>IOT Fundamentals-Big data & Analytics</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-shield-halved"></i>
                        <p>IOT Security</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-building-shield"></i>
                        <p>CCNA Cybersecurity Operations</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-calculator"></i>
                        <p>Mühasibatlıq</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-users"></i>
                        <p>Sosial Media Marketinq</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                        <p>Auotdesk 3Ds Max</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-compass-drafting"></i>
                        <p>Autodesk Autocad</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-pen-clip"></i>
                        <p>Adobe Photoshop</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-pencil"></i>
                        <p>Adobe Illustrator</p>
                    </div>
                    <div className={style.card}>
                        <i className="fa-solid fa-pen-ruler"></i>
                        <p>Corel Draw</p>
                    </div>
                </div>
               <div className={style.draw}>
               <div id={style.drawcard} className={style.card}>
               <i className="fa-brands fa-windows"></i>
                    <p>Microsoft Office</p>
                </div>
                <div id={style.drawcard} className={style.card}>
                <i className="fa-solid fa-file-excel"></i>
                    <p>Ms Excel Professional</p>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Section2