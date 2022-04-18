import React from "react";
import './SingleProduct.css';
import HeaderBlack from "../HeaderBlack/HeaderBlack";
import ImageHeader from "../ImageHeader/ImageHeader";
import five from '../../Images/5.png';
import Footer from '../Footer/Footer';
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
                   <div className="rightAside">
                       <p className="rightText">Vitae, odio adipiscing aenean tortor diam, 
                           vitae amet volutpat urna. Id aliquam ante eu tellus
                            tristique quam magna non.</p>
                            <div className="colorFilter">
                                <p>Color</p>
                                 <button className="colorButton1"></button>
                                 <button className="colorButton2"></button>
                                 <button className="colorButton3"></button>
                                 <button className="colorButton4"></button>
                                 <button className="colorButton5"></button>
                            </div>
                            <div className="sizeFilter">
                               <div className="sizeDivText">
                                   <p>Size</p>
                                   <p className="borderText">Size guide</p>
                               </div>
                               <div className="sizeDiv">
                                 <button className="sizeButton">40</button>
                                 <button className="sizeButton">41</button>
                                 <button className="sizeButton">42</button>
                                 <button className="sizeButton">43</button>
                                 <button className="sizeButton">44</button>
                                 <button className="sizeButton">45</button>
                               </div>
                            </div>
                            <div className="bag">
                                <p className="qty">QTY</p>
                                <button className="minus"><i className="fa-solid fa-minus"></i></button>
                                <span className="zero">0</span>
                                <button className="plus"><i className="fa-regular fa-plus"></i></button>
                                <div className="dollar">
                                    <p className="priceDollar">Price:</p>
                                    <p className="priceDollar1" >700$</p>
                                </div>
                                <div className="buttons">
                                    <button className="brownButton"><span className="fsz">Button</span></button>
                                    <button className="whiteButton"><span className="fsz">Button</span></button>
                                </div>
                            </div>
                   </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SingleProduct