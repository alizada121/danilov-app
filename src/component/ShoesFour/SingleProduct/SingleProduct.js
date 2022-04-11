import React from "react";
import '../SingleProduct/SingleProduct.css';
import HeaderBlack from "../../HeaderBlack/HeaderBlack";
import ImageHeader from "../../ImageHeader/ImageHeader";
import five from '../../../Images/5.png'
const SingleProduct =()=>{
  
    return(
        <div>
            <HeaderBlack/>
            <div className="man">
                <ImageHeader title={'Home  /  Man  /  SS ‘22 Collection '} titleH1={'Nazvanie'}/>  
            </div>
            <div className="filteredImage">
                   <div className="grid">
                        <div className="positionDiv"><img className="fff" src={five}/></div>
                          <div className="positionDiv"><img   className="fff" src={five}/></div>
                          <div className="positionDiv"><img  className="fff" src={five}/></div>
                          <div className="positionDiv"><img  className="fff" src={five}/></div>
                   </div>
            </div>
        </div>
    )
}
export default SingleProduct