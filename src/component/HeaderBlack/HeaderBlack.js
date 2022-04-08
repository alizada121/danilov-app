import React from "react";
import liOneWhite from '../../Images/liOneWhite.svg';
import liTwoWhite from '../../Images/liTwoWhite.svg';
import liFourWhite from '../../Images/liFourWhite.svg';
import liFiveWhite from '../../Images/liFiveWhite.svg';
import liSixWhite from '../../Images/liSixWhite.svg';
import '../HeaderBlack/HeaderBlack.css'


const HeaderBlack =()=>{
    return(
        <div className="headerBlack">
            <ul className="headerBlack_ul_one">
                <li><img src={liOneWhite} /></li>
                <li><img src={liTwoWhite} /></li>
                <li className="textBlack">About us</li>
                <li className="textBlack">Man</li>
            </ul>
            <img src={liFourWhite } />
      
                <ul className="headerBlack_ul_two">
                <li className="textBlack">What’s New</li>
                <li className="textBlack" >Profile</li>
                <li ><img src={liFiveWhite } /></li>
                <li ><img src={liSixWhite } /></li>

            </ul>
    
        </div>
    )
}
export default HeaderBlack