import React from "react";
import '../Winter/Winter.css';

import remove4 from '../../../../Images/remove4.png';
import remove5 from '../../../../Images/remove5.png';
import prev from '../../../../Images/prev.svg';
import next from '../../../../Images/next.svg';
import line2 from '../../../../Images/Line 2.svg';


const Winter = () => {
    return (
        <div className="winterCollection">
            <div className="winterTextDiv">
                 <h1 className="winterText">‘22 Winter Collection</h1>
            <p className="vitae">Vitae, odio adipiscing aenean
                tortor diam, vitae amet volutpat urna.
                Id aliquam ante eu tellus tristique quam magna non.</p>
            </div>
           
                <div className="twoShoediv">
                    <img className="twoShoeimg1" src={remove4}/>
                    <img className="twoShoeimg2" src={remove5}/>
                </div>
                <div className="slider">
                    <img className="middleLinee1" src={prev}/>
                    <img className="middleLinee" src={line2}/>
                    <img className="middleLinee1" src={next}/>
                </div>
        </div>
    )
}
export default Winter

