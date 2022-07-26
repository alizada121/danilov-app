import React, { useEffect, useState ,useRef } from "react";
import './SingleProduct.css';
// import HeaderBlack from "../HeaderBlack/HeaderBlack";
// import ImageHeader from "../ImageHeader/ImageHeader";
import HeaderBlack from "../HeaderBlack/HeaderBlack";
import Header from '../Header/Header'
import ImageHeader from "../ImageHeader/ImageHeader";
import five from '../../Images/5.png';
import Footer from '../Footer/Footer';
// import FooterWhite from "../FooterWhite/FooterWhite"
// import Shop from '../'
import ayaqqabi from '../../assets/shoes/57.jpg';
import shoes9 from '../../assets/shoes/58.jpg';
import shoes10 from '../../assets/shoes/59.jpg';
import arrowLeft from '../../Images/shirin/12.svg';
import arrowMiddle from '../../Images/shirin//13.svg';
import arrowRight from '../../Images/shirin//14.svg';
import upLine from '../../Images/shirin//9876.svg'
import PopUp from "../Pop Up/PopUp";
import FollowUs from "../home/Leman/FollowUs/FollowUs"
import mobline from "../../assets/line5.svg"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import FooterWhite from "../FooterWhite/FooterHome";
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
const SingleProduct = ({ setWitdhh, setImgC, setRandom, setDist }) => {
    const [menuOpen, setMenuOpen] = useState(false);
     const elebeleRef=useRef()
    const toggle = () => {
        if (menuOpen) {
            setMenuOpen(false)
            console.log("salam")
        } else {
            setMenuOpen(true)
            console.log(  "sagol" )
            // elebeleRef.current.style.backgroundColor= " rgba(0, 0, 0, 0.75)"
            // elebeleRef.current.style.position="relative"
            elebeleRef.current.style.overflow="hidden"
         }
    }

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
        <div className="tutaqki" ref={elebeleRef}>
             <HeaderBlack dimensions={dimensions} menuOpen={menuOpen}/>
            <div className={`main ${menuOpen && 'sss'} `}>
               
                <div className="man">
                    <div className="single-heading-general">
                        <div className="single-nav">
                            <p>Home  /  Man  /  SS ‘22 Collection </p>

                        </div>
                        <div className="single-name-cont">


                            <div className="single-name">
                                <h1>Nazvanie</h1>


                            </div>
                            <div className="single-line">

                            </div>
                        </div>
                    </div>
                    {/* <ImageHeader setWitdhh={true} title={'Home  /  Man  /  SS ‘22 Collection '} titleH1={'Nazvanie'} /> */}
                </div>
                <>
                    {(dimensions.width > 820) && <div className="filteredImage">
                        <div className="grid">
                            <div className="positionDiv"><img className="fff" src={five} /></div>
                            <div className="positionDiv"><img className="fff" src={five} /></div>
                            <div className="positionDiv"><img className="fff" src={five} /></div>
                            <div className="positionDiv"><img className="fff" src={five} /></div>
                        </div>
                        <div className="rightAside">
                            <p className="rightText">Vitae, odio adipiscing aenean tortor diam,
                                vitae amet volutpat urna. Id aliquam ante eu tellus
                                tristique quam magna non.</p>
                            <div className="colorFilter">
                                <p className="changeStyle">Color</p>
                                <button className="colorButton1"></button>
                                <button className="colorButton2"></button>
                                <button className="colorButton3"></button>
                                <button className="colorButton4"></button>
                                <button className="colorButton5"></button>
                            </div>
                            <div className="sizeFilter">
                                <div className="sizeDivText">
                                    <p className="gh">Size</p>
                                    <div className="bbb">
                                        <p className="borderText">Size guide</p>
                                        <div className="xettt">

                                        </div>
                                    </div>
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
                                    <button className="brownButton"><span className="fsz" id="whht">Button</span></button>
                                    <button className="whiteButton"><span className="fsz">Button</span></button>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {(dimensions.width <= 820) &&
                        <div className="common">
                            <div className="nazVan">
                                <p className="nazvannaz" >Vitae, odio adipiscing aenean tortor diam, vitae amet volutpat urna</p>
                                <span className="dollarAmount">700$</span>
                            </div>
                            <div className="swwiperLeftDistance"><div className='swiper-mob-cont'>

                                <img src={mobline} className="mob-line" id="olcu"></img>
                                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper" noSwiping={true} onlyExternal={true} noSwipingClass="swiper-slide" >

                                    <SwiperSlide><img src={ayaqqabi} className="ayagg" /></SwiperSlide>
                                    <SwiperSlide><img src={shoes9} className="ayagg"/></SwiperSlide>
                                    <SwiperSlide><img src={shoes10} className="ayagg"/></SwiperSlide>
                                </Swiper>

                                {/* <img className="arrmidle1" src={arrowMiddle} /> */}
                                {/* <div className="arrows1" >
                                <img src={arrowLeft} />
                                <img className="arrmidle1" src={arrowMiddle} />
                                <img src={arrowRight} />
                            </div> */}
                            </div></div>

                            <div className="chooseInput">
                                <div className="colorFilter">
                                    <p className="reng">Color</p>
                                    <button className="colorButton1"></button>
                                    <button className="colorButton2"></button>
                                    <button className="colorButton3"></button>
                                    <button className="colorButton4"></button>
                                    <button className="colorButton5"></button>
                                </div>
                                <div className="chooseSize">
                                    <label htmlFor="size"></label>
                                    <input type="size" placeholder="Choose size" id="choose" name="size"></input><img onClick={toggle} className="linearr" src={upLine} />
                                </div>
                            </div>

                        </div>
                    }
                </>
               
                  
               

            </div>
            <FollowUs />

             
             
<Footer />
            <PopUp menuOpen={menuOpen} toggle={toggle} />
        </div>
    )
}
export default SingleProduct


