import React from "react";
import './Footer.css';
import insta from '../../assets/insta.svg';
import fb from '../../assets/fb.svg'
import bg1 from "../../assets/bg-pic1.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Footer = () => {  
    return (
        <div className="foot">

            {/* <div className="footer-bg">
                <img src={bg1}></img>

            </div> */}
            <div className="footer">
                <div className="just">
                    <div className="footer-row1">
                    <ul>
                        <li>About us</li>
                        <li>Our story</li>
                        <li>Process we follow</li>
                        <li>Our Gallery</li>
                    </ul>
                    <ul>
                        <li>Man</li>
                        <li>Boots</li>
                        <li>Derby shoes</li>
                        <li>Oxford shoes</li>
                        <li>Monk shoes</li>
                        <li>Sneakers</li>
                        <li>Loafers</li>
                        <li>Boat shoes</li>
                        <li>Slippers</li>
                    </ul>
                    </div>

                    <div className="footer-row2">
                    <ul>
                        <li>Profile</li>
                        <li>My profile</li>
                        <li>Purchases</li>
                        <li>Favourites</li>
                    </ul>
                    <ul >
                        <li>Follow us</li>
                        <div className="footer-contact">
                            <div className="footer-insta">
                            <a href="https://www.instagram.com/danilov_baku/?hl=en" target="_blank"><img className="insta" src={insta} /></a>
                            </div>
                            <div className="footer-fb">
                                 <a href="https://www.facebook.com/Danilov-Shoes-2000969736610486/" target="_blank"><img src={fb}  /></a>
                            </div>
                           
                        </div>


                    </ul>
                    </div>   
                </div>
                <div className="lastPart">
                    <ul>
                        <li>@ 2022 All Rights Reserved</li>
                        <a href="https://claradix.com/#/welcome" target="_blank">
                        <li className="claradix">By CLARADIX STUDIO</li>
                        </a>
                        <li>Privacy Policy</li>
                    </ul>

                   
                </div>

                <div className="claradix-mobile-cont">
                     <a href="https://claradix.com/#/welcome" className="claradix-mobile" target="_blank">
                        <p >By CLARADIX STUDIO </p>
                    </a>
                        
                </div>
            </div>

        </div>
    )
}
export default Footer