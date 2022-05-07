import React from 'react'
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Elaqe from '../contact/elaqe';
import "../Navbar/Navbar.css"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [active, setActive] = useState()

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  window.addEventListener('scroll', changeNav)

  return (
    <nav >
      <div className={active ? "isActiveWrapper" : "wrapper"}>
        <div className="logo">
          <NavLink to={"/"} >DevCenter</NavLink>
        </div>
        <ul
          className="nav-links"
          style={isMenuOpen ? { left: "0%" } : { left: "-100%" }}
        >
          <label
            htmlFor="close-btn"
            className="btn close-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </label>
          <li>
            <NavLink to={"/"}>Ana səhifə</NavLink>
          </li>
          <li>
            <a href='#' className="desktop-item">
              Akademiya
            </a>
            <label htmlFor="showDrop" className="mobile-item" onClick={() => setDropdown(!dropdown)}>
              Akademiya
            </label>
            <ul id="drop-menu" className={!dropdown ? 'dropdown' : "dropdown active"}>
              <li>
                <NavLink onClick={() => setIsMenuOpen(false)} to={"/about"} >Akademiya haqqında</NavLink>
              </li>
              <li>
                <NavLink onClick={() => setIsMenuOpen(false)} to={"/mission"}>Missiya və vizyon</NavLink>
              </li>
              <li>
                <NavLink onClick={() => setIsMenuOpen(false)} to={"/blog"}>Faydalı məlumatlar</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="#test" className="desktop-item">
              Xidmətlərimiz
            </a>
            <label htmlFor="showDrop" className="mobile-item" onClick={() => setDropdown1(!dropdown1)}>
              Xidmətlərimiz
            </label>
            <ul id="drop-menu" className={!dropdown1 ? 'dropdown' : "dropdown active"}>
              <li>
                <NavLink onClick={() => setIsMenuOpen(false)} to={"/biznes"}>Biznesin idarə edilməsi</NavLink>
              </li>
              <li>
                <NavLink onClick={() => setIsMenuOpen(false)} to={"/sosial"}>Sosial media marketinq</NavLink>
              </li>
              <li>
                <NavLink onClick={() => setIsMenuOpen(false)} to={"/marketing"}>Rəqəmsal marketinq</NavLink>
              </li>
              <li>
                <NavLink to={"/erp"}>ERP\CRM</NavLink>
              </li>
              <li>
                <NavLink to={"/konsalting"}>Konsaltinq</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="#test" className="desktop-item">
              Kurslar
            </a>
            <label htmlFor="showMega" className="mobile-item" onClick={() => setDropdown2(!dropdown2)}>
              Kurslar
            </label>
            <div className={!dropdown2 ? "mega-box" : "mega-box active"}>
              <div className="content">
                <div className="row">
                  <ul id="mega-links" className={!dropdown2 ? 'dropdown' : "dropdown active"}>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/itessentials"}>IT Essentials</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/ccnav7"}>CCNA V7</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/cybersecurity"} href="#test">Cybersecurity Essentials</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/ndglinux"}>NDG Linux</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <ul id="mega-links" className={!dropdown2 ? 'dropdown' : "dropdown active"}>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/systemadministration"} >System Administration</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/pcappython"}>PCAP-Python Essentials</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/cliprogramming"}>CLI-Programming Essentials in C,C++</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/clipadvanced"}>CLP-Advanced Programming in C,C++</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <ul id="mega-links" className={!dropdown2 ? 'dropdown' : "dropdown active"}>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/iotfundamentals"} >IOT Fundamentals-Big data & Analytics</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/iotsecurity"}>IOT Security</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/ccnacybersecurity"} >CCNA Cybersecurity Operations</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/accounting"}>Mühasibatlıq</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <ul id="mega-links" className={!dropdown2 ? 'dropdown' : "dropdown active"}>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/sosialmediamarketing"}>SMM</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/autodesk3dsmax"}>Autodesk 3Ds Max</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/autocad"}>Autodesk Autocad</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/adobephotoshop"}>Adobe Photoshop</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <ul id="mega-links" className={!dropdown2 ? 'dropdown' : "dropdown active"}>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/adobeıllustrator"} >Adobe Illustrator</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/coreldraw"}>Corel Draw</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/microsoftoffice"}>Microsoft Office</NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => setIsMenuOpen(false)} to={"/excel"}>MS Excel Professional</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <NavLink className='elaqe' to='elaqe' element={<Elaqe/>}>Elaqe</NavLink>
          </li>
        </ul>

        <label
          htmlFor="menu-btn"
          className="btn menu-btn"
          style={isMenuOpen ? { display: "none" } : { display: "block" }}
          onClick={() => setIsMenuOpen(true)}
        >
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  )
}

export default Navbar