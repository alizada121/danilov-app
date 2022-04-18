import React from "react";
import liOne from '../../Images/Group 125.svg';
import liTwo from '../../Images/Vector.svg';
import liFour from '../../Images/Group 123.svg';
import liFive from '../../Images/Group 124.svg';
import liSix from '../../Images/Group.svg';
import small from '../../Images/smallScreen1.svg';
import twoLine from '../../Images/twoLine.svg';
import '../Header/Header.css'
const Header = ({ dimensions }) => {
    return <>

        {(dimensions.width > 800) && <div className="header">
            <ul className="header_ul_one">
                <li><img src={liOne} /></li>
                <li><img src={liTwo} /></li>
                <li className="text">About us</li>
                <li className="text">Man</li>
            </ul>
            <img src={liFour} />

            <ul className="header_ul_two">
                <li className="text">What’s New</li>
                <li className="text" >Profile</li>
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
export default Header