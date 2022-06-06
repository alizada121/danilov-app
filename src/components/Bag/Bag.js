import React, { useState,useEffect } from "react";
import './Bag.css';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import ImageHeader from "../ImageHeader/ImageHeader";
import ShoppingBag from "../../component/ShoppingBag/ShoppingBag";
import Footer from '../../components/Footer/Footer'
import SameCard from "../../component/SameCard/SameCard";
import responsiveImg from '../../Images/shirin/7777.png';
import colorvector from '../../Images/shirin/colorVector.svg';
import sizeHeart from '../../Images/shirin/sizeHeart.svg';
import sizeDelete from '../../Images/shirin/sizeDelete.svg';

import FollowUs from "../home/Leman/FollowUs/FollowUs";
function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}
const Bag = ({ text, border, showButton, setWitdhh ,changeStyle }) => {
    const [button, setButton] = useState(false);
    const [line, setLine] = useState(false);
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 1000)
        window.addEventListener('resize', debouncedHandleResize)
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })
    return (
        <div>
             <HeaderBlack dimensions={dimensions}/> 
            <div className="bottomBag">
            <div className="bag-heading-general">
                        <div className="bag-nav">
                            <p>Home  /  Man  /  SS ‘22 Collection </p>

                        </div>
                        <div className="bag-name-cont">

                        
                        <div className="bag-name">
                            <h1>My bag</h1>


                        </div>
                        <div className="bag-line">

                        </div>
                        </div>
                    </div>
                {(dimensions.width > 1000) &&
                    <div className="flexRight">
                        <div className="marginD">
                            <ShoppingBag setButton={!button} />
                            <ShoppingBag setLine={!line} />
                        </div>
                        <SameCard showButton={true} changeStyle={true} />
                    </div>
                }
                {(dimensions.width < 1000) &&
                <>
                <div className="smallScreen">
                        <div className="smallScreen_1">
                            <img src={responsiveImg} />
                            <div className="yazi">
                                <p>Demedim</p>
                               <p> <span>733$ |</span> In Stock</p>
                            </div>
                        </div>
                        <div className="smallScreen_2">
                            <div className="leftSize">
                                <span>size</span>
                                <label htmlFor="size"></label>
                                <input type="size" placeholder="size" id="size" name="size"></input>
                                <img className="colorVector" src={colorvector} />
                            </div>
                            <div className="rightColor">
                                <span>color</span>
                                <label htmlFor="color"></label>
                                <input type="" placeholder="color" id="color" name="color"></input>
                                <img className="colorVector" src={colorvector} />
                            </div>
                        </div>
                         <div className="smallScreen_3">
                                 <div className="buttonText">
                                     <span>QTY</span>
                                     <button className="square">1</button>
                                 </div>
                                 <div className="anyway">
                                 <img className="coldHeart" src={sizeHeart}/>
                           <img src={sizeDelete}/>
                                 </div>
                         </div>
                         <div className="smallScreen_1">
                            <img src={responsiveImg} />
                            <div className="yazi">
                                <p>Demedim</p>
                                <p><span>733$   | </span>In Stock</p>
                            </div>
                        </div>
                        <div className="smallScreen_2">
                            <div className="leftSize">
                                <span>size</span>
                                <label htmlFor="size"></label>
                                <input type="size" placeholder="size" id="size" name="size"></input>
                                <img className="colorVector" src={colorvector} />
                            </div>
                            <div className="rightColor">
                                <span>color</span>
                                <label htmlFor="color"></label>
                                <input type="" placeholder="color" id="color" name="color"></input>
                                <img className="colorVector" src={colorvector} />
                            </div>
                        </div>
                         <div className="smallScreen_3">
                                 <div className="buttonText">
                                     <span>QTY</span>
                                     <button className="square">1</button>
                                 </div>
                                 <div className="anyway">
                                 <img className="coldHeart" src={sizeHeart}/>
                           <img src={sizeDelete}/>
                                 </div>
                         </div>
                    </div>
                  <SameCard showButton={true} changeStyle={true}/>
                
                </>
                    
                }
            </div>
            <div className="bag-followUs">
                <FollowUs/>

            </div>
            <div className="mesafe">
             <Footer/> 
            </div>
           
        </div>
    )
}
export default Bag;