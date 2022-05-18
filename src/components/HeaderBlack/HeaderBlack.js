import React from "react";
import liOneWhite from '../../Images/liOneWhite.svg';
import liTwoWhite from '../../Images/liTwoWhite.svg';
import liFourWhite from '../../Images/liFourWhite.svg';
import liFiveWhite from '../../Images/liFiveWhite.svg';
import liSixWhite from '../../Images/liSixWhite.svg';
import liFour from '../../Images/qaraqara.svg';
import small from '../../Images/qaraqara2.svg';
import twoLine from '../../Images/qara1.svg';
import '../HeaderBlack/HeaderBlack.css'
import { Link } from "react-router-dom"
import Header from "../Header/Header";
const HeaderBlack = ({ dimensions }) => {
    return <>
        {(dimensions.width > 800) &&
            <div className="headerBlack">
                <ul className="headerBlack_ul_one">
                    <li><img src={liOneWhite} /></li>
                    <li><img src={liTwoWhite} className="distanc" /></li>
                    <li className="textBlack">About us</li>
                    <li className="textBlack">Man</li>
                </ul>
                <Link to="/">
                    <img src={liFourWhite} />
                </Link>

                <ul className="headerBlack_ul_two">
                    <li className="textBlack">What’s New</li>
                    <li className="textBlack" >Profile</li>
                    <li ><img src={liFiveWhite} /></li>
                    <li ><img src={liSixWhite} /></li>

                </ul>

            </div>}
        {(dimensions.width <= 800) && <div className="headerBlack">
        <div className="wtdhBlack">
           <ul className="headerBlack_ul_one">
             
            <li><img src={twoLine} /></li>
          
        </ul>
        <ul className="headerBlack_ul_one">
             
             <li><img src={twoLine} /></li>
           
         </ul>   
        </div>
      
        <img className="sizeImgBlack" src={liFour} />

        <ul className="headerBlack_ul_two">
            <li ><img src={small} /></li>

        </ul>
    </div>
        }
    </>
}
export default HeaderBlack