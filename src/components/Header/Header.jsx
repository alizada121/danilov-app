import React from "react";
import {Link} from "react-router-dom"
import instaBlack from "../../assets/fb-black.png"
import fbBlack from "../../assets/insta-black.png"
import logo from "../../assets/Group 123.svg"
import lupa from "../../assets/lupa.png"
import bag from "../../assets/bag.png"

import "../Header/Header2.css"
const Header = () => {
    return (
    <div className="header-container">
        <div className="header-new">
            <ul className="header-left">
                <li><img src={instaBlack} /></li>
                <li><img src={fbBlack} /></li>

                <Link to="/about">              
                <li className="text">About us</li>
                </Link>
                <Link to="/">
                <li className="text">Man</li>
                </Link>
            </ul>

            <div className="header-hamburger">
            <svg width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.25" x2="50" y2="1.25" stroke="#1B1B1B" stroke-width="1.5"/>
            </svg>

            <svg width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.25" x2="50" y2="1.25" stroke="#1B1B1B" stroke-width="1.5"/>
            </svg>



            </div>

            <div className="header-logo">
            <img src={logo} />
            </div>
            <ul className="header-right">
                <Link to="/newIn">
                <li className="text">What’s New</li>
                </Link>
                <Link to="/signUp">
                <li className="text" >Profile</li>
                </Link>
                
                 <li ><img src={lupa} /></li>
                <li ><img src={bag}  id="bag"/></li> 

            </ul>

            <div className="header-bag">

            </div>
    
        </div>
    </div>
    )}
export default Header