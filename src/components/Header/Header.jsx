import React from "react";
import instaBlack from "../../assets/fb-black.png"
import fbBlack from "../../assets/insta-black.png"
import logo from "../../assets/Group 123.svg"
import lupa from "../../assets/lupa.png"
import bag from "../../assets/bag.png"

import './Header2.css'
const Header = () => {
    return <div className="header-container">
        <div className="header">
            <ul className="header_ul_one">
                <li><img src={instaBlack} /></li>
                <li><img src={fbBlack} /></li>
                <li className="text">About us</li>
                <li className="text">Man</li>
            </ul>

            <div className="header-hamburger">

            </div>

            <div className="header-logo">
            <img src={logo} />
            </div>
            <ul className="header_ul_two">
                <li className="text">What’s New</li>
                <li className="text" >Profile</li>
                 <li ><img src={lupa} /></li>
                <li ><img src={bag}  id="bag"/></li> 

            </ul>

            <div className="header-bag">

            </div>
    
        </div>
    </div>
}
export default Header