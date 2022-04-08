import React from "react";
import '../Shop/Shop.css';
import shoe1 from '../../Images/remove1.png';

import shoe3 from '../../Images/remove3.png';

import Borderimage from "../BorderImage/BorderImage";
const Shop =()=>{
    return (
         <div className="pageShop">
            <h1 className="shopping">Shop</h1>
            <div className="imageCont">
                <div className="image1">
                   <img src={shoe1}/>  
                </div>
               
                <Borderimage/>
               <div className="image3">
                    <img src={shoe3}/>  
               </div>
             
            </div>
    </div>
    )
   
}
export default Shop