import React from "react";
import './Footer.css';
import insta from '../../assets/insta-black.png';
import fb from '../../assets/fb-black.png'
import bg1 from "../../assets/bg-pic1.png"
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
                        <li><b>About us</b></li>
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
                            <img className="insta" src={insta} />
                            </div>
                            <div className="footer-fb">
                                 <img src={fb} />
                            </div>
                           
                        </div>


                    </ul>
                    </div>
                </div>
                <div className="lastPart">
                    <ul>
                        <li>@ 2022 All Rights Reserved</li>
                        <li>By CLARADIX STUDIO</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Footer