import React, { useState, useEffect } from 'react'
import Card from "../../../Card/Card.jsx"
import { Swiper, SwiperSlide } from "swiper/react";
import line from "../../../../assets/Line 3.png"
import mobline from "../../../../assets/line5.svg"
import vectorLeft from "../../../../assets/vectorLeft.png"
import longLine from "../../../../assets/longLine.png"
import vectorRight from "../../../../assets/vectorRight.png"
import rrr from "../../../../Images/shirin/rrr.svg"
import lll from "../../../../Images/shirin/lll.svg"

import data from "../../../../Data.json"
import "../Shop1/Shop.css"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

function Shop() {

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })


    const [slice1, setSlice1] = useState(0);
    const [slice2, setSlice2] = useState(3);

    useEffect(() => {
        if (dimensions.width < 1024) setSlice2(1)
        else setSlice2(3)
    }, [dimensions.width])
    console.log(dimensions)
    return (
        <div className='shop-general'>

            <div className='shop-heading'>
                <h1>Shop</h1>

            </div>

            <div className="shop1-slider">
                <div className='ShopSlider-slider-part1'  >
                    {data.slice(slice1, slice2).map((item) => {
                        return (
                            <Card

                                name={item.name}
                                price={item.price}
                                desc={item.desc}
                                img={item.img}
                                img2={item.pmg}
                                key={Math.random()}
                                faiz='otuz'


                            />
                        )
                    })}

                </div>


            </div>



            <div className='swiper-mob-cont'>
                <img src={mobline} className="mob-line"></img>
                <Swiper navigation={true} modules={[Navigation]} loop={true} noSwiping={true} onlyExternal={true} noSwipingClass="swiper-slide" className="mySwiper">

                    <SwiperSlide> <div className='Fcard'>
                        {data.slice(0, 1).map((item) => {
                            return (
                                <Card

                                    name={item.name}
                                    price={item.price}
                                    desc={item.desc}
                                    img={item.img}
                                    img2={item.pmg}
                                    key={Math.random()}
                                    faiz='otuz'


                                />
                            )
                        })}


                    </div></SwiperSlide>

                    <SwiperSlide> <div className='mobile-card'>
                        {data.slice(1, 2).map((item) => {
                            return (
                                <Card

                                    name={item.name}
                                    price={item.price}
                                    desc={item.desc}
                                    img={item.img}
                                    img2={item.pmg}
                                    key={Math.random()}
                                    faiz='otuz'


                                />
                            )
                        })}


                    </div></SwiperSlide>

                    <SwiperSlide> <div className='mobile-card'>
                        {data.slice(2, 3).map((item) => {
                            return (
                                <Card

                                    name={item.name}
                                    price={item.price}
                                    desc={item.desc}
                                    img={item.img}
                                    img2={item.pmg}
                                    key={Math.random()}
                                    faiz='otuz'


                                />
                            )
                        })}


                    </div></SwiperSlide>
                
                        <div className='card-navigation-mobile-cont'>

                            <div className='vector-left'>
                                <img src={vectorLeft}>
                                </img>

                            </div>



                            <div className='vector-right'>
                                <img className='lll' src={vectorRight}></img>

                            </div>


                        </div>


             
                </Swiper>
            </div>





        </div>
    )
}

export default Shop