import React from "react";
import {Link} from "react-router-dom"
import liOne from '../../Images/Group 125.svg';
import liTwo from '../../Images/Vector.svg';
import liFour from '../../Images/Group 123.svg';
import liFive from '../../Images/Group 124.svg';
import liSix from '../../Images/Group.svg';
import small from '../../Images/smallScreen1.svg';
import twoLine from '../../Images/twoLine.svg';
import '../HeaderWhite/HeaderWhite.css'
const HeaderWhite = ({ dimensions }) => {
    return <>

        {(dimensions.width > 800) && <div className="header">
            <ul className="header_ul_one" id="white">
               <a href="https://www.instagram.com/danilov_baku/?hl=en" target="_blank"> <li><img src={liOne} /></li></a>
                <a href="https://www.facebook.com/Danilov-Shoes-2000969736610486/" target="_blank"><li><img src={liTwo} /></li></a>
                <Link to="/about">
                 <li className="text">About us</li>
                </Link>
               <Link to="/">
                <li className="text">Man</li>
                </Link>
            </ul>
            <img src={liFour} />

            <ul className="header_ul_two "  id="white">
                <Link to="/newIn">
                <li className="text">What’s New</li>
                </Link>
                <Link to="/signUp">
                <li className="text" >Profile</li>
                </Link>
                <li ><img src={liFive} /></li>
                <li ><img src={liSix} /></li>

            </ul>
        </div>}
        {(dimensions.width < 800) && <div className="header">
            <div className="wtdh">
               <ul className="header_ul_one">
                 
                <li><img src={twoLine} /></li>
              
            </ul>
            <ul className="header_ul_one">
                 
                 <li><img src={twoLine} /></li>
               
             </ul>   
            </div>
          
            <img className="sizeImg" src={liFour} />

            <ul className="header_ul_two">
                <li ><img src={small} /></li>

            </ul>
        </div>}
    </>
}
export default HeaderWhite