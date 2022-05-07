import React, { Component } from "react";
import image1 from "../image/3.png"
import image2 from "../image/4.jpeg"
import image3 from "../image/5.jpeg"
import image4 from "../image/6.jpeg"
import image5 from "../image/7.jpeg"
import image6 from "../image/8.jpeg"
import image7 from "../image/9.jpeg"
import image8 from "../image/10.jpeg"
import image9 from "../image/11.jpeg"
import image10 from "../image/12.jpeg"
import image11 from "../image/13.jpeg"
import image12 from "../image/14.jpeg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../Section7/Section7.module.css"
export default class AutoPlayMethods extends Component{
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1200,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
          }
        },
      ]
    };

    return (
      <div >
        <div className={style.container}>
          <div className={style.text}>
            <h1>Partnyorlarımız</h1>
          </div>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div className={style.bgcolor}>
              <img src={image1} />
            </div>
            <div className={style.bgcolor}>
              <img src={image2} />
            </div>
            <div className={style.bgcolor}>
              <img src={image3} />
            </div>
            <div className={style.bgcolor}>
              <img src={image4} />
            </div>
            <div className={style.bgcolor}>
              <img src={image5} />
            </div>
            <div className={style.bgcolor}>
              <img src={image6} />
            </div>
             <div className={style.bgcolor}>
              <img src={image7} />
            </div>
            <div className={style.bgcolor}>
              <img src={image8} />
            </div>
            <div className={style.bgcolor}>
              <img src={image9} />
            </div>
            <div className={style.bgcolor}>
              <img src={image10} />
            </div>
            <div className={style.bgcolor}>
              <img src={image11} />
            </div>
              <div className={style.bgcolor}>
              <img src={image12} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}