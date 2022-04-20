import React, { useState } from "react";
import './Bag.css';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import ImageHeader from "../ImageHeader/ImageHeader";
import ShoppingBag from "../../component/ShoppingBag/ShoppingBag";
import Footer from '../../components/Footer/Footer'
import SameCard from "../../component/SameCard/SameCard";
const Bag = ({ text, border,showButton }) => {
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


                    <SameCard showButton={true}/>

                </div>
              
            </div>
        <Footer/>
        </div>
    )
}
export default Bag;