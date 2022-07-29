import React, { useState, useEffect, useRef } from "react";
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
import Button from "../../component/Button/Button"
import FollowUs from "../home/Leman/FollowUs/FollowUs";
import urekqara from "../../Images/shirin/urekqara.svg"

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
const Bag = ({ text, border, showButton, setWitdhh, changeStyle }) => {
    const urekRef = useRef();
    const urekRef1 = useRef();
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const fillHeart1 = () => {
        if (!toggle1) {
            urekRef.current.src = urekqara

            console.log(sizeDelete)

            setToggle1(true)
        } else {
            urekRef.current.src = sizeHeart


            setToggle1(false)
        }

    }

    const fillHeart2 = () => {
        if (!toggle2) {
            urekRef1.current.src = urekqara

            console.log(sizeDelete)

            setToggle2(true)
        } else {
            urekRef1.current.src = sizeHeart


            setToggle2(false)
        }

    }
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
            <HeaderBlack dimensions={dimensions} />

            <div className="bottomBag">
                <div className="bag-heading-general">
                    <div className="bag-nav">
                        <p>Home  / Bag </p>

                    </div>
                    <div className="bag-name-cont">


                        <div className="bag-name">
                            <h1>My bag</h1>


                        </div>
                        <div className="bag-line">
                            <div className="bag-line-right">
                                <p className="contunios">Contunio Shopping    <div className="brdr"></div>   </p>

                            </div>

                        </div>

                    </div>

                </div>
                {(dimensions.width >= 1000) &&
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

                                    <label htmlFor="size">Size</label>
                                    <input type="size" placeholder="size" id="size" name="size"></input>
                                    <img className="colorVector" src={colorvector} />
                                </div>
                                <div className="rightColor">

                                    <label htmlFor="color">Color</label>
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
                                    <img className="coldHeart" src={sizeHeart} ref={urekRef1} onClick={fillHeart2} />
                                    <img src={sizeDelete} />
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
                                    {/* <span>size</span> */}
                                    <label htmlFor="size">Size</label>
                                    <input type="size" placeholder="size" id="size" name="size"></input>
                                    <img className="colorVector" src={colorvector} />
                                </div>
                                <div className="rightColor">

                                    <label htmlFor="color">Color</label>
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
                                    <img className="coldHeart" src={sizeHeart} ref={urekRef} onClick={fillHeart1} />
                                    <img src={sizeDelete} />
                                </div>
                            </div>
                        </div>


                        <div className='Order-summary-container1'>
                            <h1 className="ords">Order summary</h1>
                            {/* <div className='Order-summary1'>

                                <div className='Order-delivery'>
                                    <h4> Delivery</h4>
                                    <div className='delivery-choices'>
                                        <p>Free</p>
                                        <p>Express: 10$</p>
                                    </div>
                                </div>


                                <div className='Order-subtotal'>
                                    <div className='subtotal-row'>
                                        <h5 style={{ fontWeight: 600 }}>Subtotal</h5>
                                        <h5 className='normal' style={{ fontWeight: 600 }}>1 466$</h5>
                                    </div>
                                    <div className='subtotal-row'>
                                        <p>Discount</p>
                                        <p>0.00$</p>
                                    </div>
                                    <div className='subtotal-row'>
                                        <p>Delivery</p>
                                        <p>10$</p>
                                    </div>

                                </div>

                                <div className='Order-total'>
                                    <h4>Total</h4>
                                    <h4 className='normal'>1 476$</h4>

                                </div>
                               
                            </div> */}
                            <div className="rightAsideBag">
                                <div className="free">
                                    <p className="one">Delivery</p>

                                    <div className="yazilar">
                                        <div className="div1">
                                            <p className="two">Free</p>
                                        </div>



                                        <div className="div2">
                                            <p className="ghgh">Express: 10$</p>
                                            <div className="bottomxet"></div>
                                        </div>



                                    </div>


                                </div>
                                <div className="divdiscount">
                                    <div className="discount" id="iddiscount">
                                        <p className="one">Subtotal</p>
                                        <p className="two">1 466$</p>
                                    </div>
                                    <div className="discount" id="iddiscount">
                                        <p className="two">Discount</p>
                                        <p className="two">0.00$</p>
                                    </div>
                                    <div className="discount" id='discount'>
                                        <p className="two">Delivery</p>
                                        <p className="two">10$</p>
                                    </div>
                                </div>
                                <div className="discount1">
                                    <div className="total">
                                        <p className="oneone">Total</p>
                                        <p className="threethree" >1 476$</p>
                                    </div>

                                </div>

                                <Button />
                            </div>

                        </div>




                    </>

                }
            </div>
            <div className="bag-followUs">
                <FollowUs />

            </div>
            <div className="mesafe">
                <Footer />
            </div>

        </div>
    )
}
export default Bag;