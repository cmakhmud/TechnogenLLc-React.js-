import React from 'react'
import style from "../Section22/Section22.module.css"
import image from "../image/16.png"
import image2 from "../image/18.png"
import image1 from "../image/19.png"
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
function Section22() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Bunlarada bax</h1>
            </div>
            <div className={style.blogscontainer}>
                <NavLink to={"/blog1"} className={style.post}>
                    <img src={image} alt="img" />
                    <small>Blog</small>
                    <h2>Kursa getmədən proqramlaşdırma öyrənmək</h2>
                    <div className={style.more} id={style.more1}>
                        <p>Ətraflı</p>
                        <span><BsArrowRight /></span>
                    </div>
                </NavLink>
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
                    <img src={image2} alt="img" />
                    <small>Blog</small>
                    <h2>Niyə proqramçı olmalı olduğunu göstərən 6 səbəb</h2>
                    <div className={style.more} id={style.more1}>
                        <p>Ətraflı</p>
                        <span><BsArrowRight /></span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Section22