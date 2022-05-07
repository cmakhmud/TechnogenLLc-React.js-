import React from 'react'
import style from "../Section13/Section13.module.css"
import image1 from "../image/17.png"
import image2 from "../image/18.png"
import image3 from "../image/19.png"
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
function Section13() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Bunlarada bax</h1>
            </div>
            <div className={style.blogscontainer}>
                <NavLink to={"/blog2"} className={style.post}>
                    <img src={image1} alt="img" />
                    <small>Blog</small>
                    <h2>Bu serialları bitirən kimi proqramçı olmaq üçün kursa yazılacaqsan</h2>
                    <div className={style.more}>
                        <p>Ətraflı</p>
                        <span><BsArrowRight /></span>
                    </div>
                </NavLink>
                <NavLink to={"/blog3"} className={style.post}>
                    <img src={image3} alt="img" />
                    <small>Blog</small>
                    <h2>Niyə proqramçı olmalı olduğunu göstərən 6 səbəb</h2>
                    <div className={style.more} id={style.more1}>
                        <p>Ətraflı</p>
                        <span><BsArrowRight /></span>
                    </div>
                </NavLink>
                <NavLink to={"/blog4"} className={style.post}>
                    <img src={image2} alt="img" />
                    <small>Blog</small>
                    <h2>Developerlərin ölmədən əvvəl izləməli olduğu 5 məşhur film</h2>
                    <div className={style.more} id={style.more1}>
                        <p>Ətraflı</p>
                        <span><BsArrowRight /></span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Section13
