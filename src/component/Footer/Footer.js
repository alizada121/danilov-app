import React from "react";
import '../Footer/Footer.css';
import insta from '../../Images/Group 1256.png';
import fb from '../../Images/Group 12567.png'
const Footer = () => {
    return (
        <div className="foot">
            <div className="footer">
                <div className="just">
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
                    <ul>
                        <li>Profile</li>
                        <li>My profile</li>
                        <li>Purchases</li>
                        <li>Favourites</li>
                    </ul>
                    <ul >
                        <li>Follow us</li>
                        <div className="contact">
                            <img className="insta" src={insta} />
                            <img src={fb} />
                        </div>


                    </ul>
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