import React, { useState } from "react";
import '../Bag/Bag.css';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import ImageHeader from "../ImageHeader/ImageHeader";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import Footer from '../Footer/Footer'
import SameCard from "../SameCard/SameCard";
const Bag = ({ text, border , btnclass}) => {
    const [button, setButton] = useState(false);
    const [line, setLine] = useState(false);
  
    return (
        <div>
            <HeaderBlack />
            <div className="bottomBag">
                <ImageHeader title={'Home  /  Bag'} titleH1={'My bag'} setText={!text} setBorder={border} imagetext={'Continue shopping'} />
                <div className="flexRight">
                    <div className="marginD">
                        <ShoppingBag setButton={!button} />
                        <ShoppingBag setLine={!line} />
                    </div>
                    <SameCard/>
                </div>
              
            </div>
        <Footer/>
        </div>
    )
}
export default Bag;