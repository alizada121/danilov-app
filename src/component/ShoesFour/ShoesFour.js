import React from "react";
import '../ShoesFour/ShoesFour.css';
import remove4 from '../../Images/remove4.png';
import vectorright from  '../../Images/Linear.svg'
const ShoesFour = () => {
    return (
        <div className="sliderImg">
            <div className="fourImg">
                <img className="removeb" src={remove4} />
                <img className="removeb"  src={remove4} />
                <img className="removeb"  src={remove4} />
                <img className="removeb"  src={remove4} />
            </div>
            <div className="number">
                <div className="direction">
                    <p className="numb">1</p>
                    <p className="numb">2</p>
                    <p className="numb">3</p>
                    <p className="numb">4</p>
                    <p className="numb">5</p>
                    <p className="numb">...</p>
                    <p className="numb">30</p>
                   
                </div>
                        <img className="side" src={vectorright} />
            </div>
        </div>
    )
}
export default ShoesFour