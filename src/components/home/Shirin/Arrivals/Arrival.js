import React from "react";
import { Link } from "react-router-dom";
import shoe from '../../../../Images/shoes.svg'
import shoe2 from '../../../../Images/remove0.png'
import '.././Arrivals/Arrival.css';
import line from '../../../../Images/Linear.svg';
import passBlack from '../../../../Images/passBlack.svg';

const Arrival = () => {
    const scrollTop = () =>{   window.scrollTo({top: 0});};
    return <>
        <div className="arr">
            <h1 className="newArrivals">New Arrivals</h1>
            <div className="imageContainer">
                <div className="brownImg"><img src={shoe} /></div>

                <div className="blueImg" >
                    <div className="blabla">
                        <img className="blueImage" src={shoe2} />
                    </div>

                    <div className="texttwo">
                        <p className="lacus">Lacus elit amet volutpat pulvinar.
                            Ultrices placerat ut semper a in nisl, a cursus</p>
                       

                        </div>
                        <Link to="/newIn" className="twice-link" onClick={scrollTop}>
                        <div className="twice">
                            <p className="seeAll">See all</p>
                            <div className="anyW1">
                                <div className="divS1"></div> <img className="distance1" src={passBlack} />
                            </div>

                    </div> 
                        </Link>
                </div>
            </div>

        </div>
    </>
}
export default Arrival