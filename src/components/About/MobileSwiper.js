import React from 'react'
import danilov1 from '../../Images/danilov1.png';
import danilov2 from '../../Images/danilov2.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../About/MobileSwiper.css"
import { Navigation } from "swiper";
function MobileSwiper() {
  return (
    <div className='mobileSwiper-cont'>
         <Swiper navigation={true} loop={true} modules={[Navigation]}  className="mySwiper">
        <div className='mobileSwiper-img'>
        <SwiperSlide> <img src={danilov2}></img></SwiperSlide>
        <SwiperSlide><img src={danilov2}></img></SwiperSlide>


        </div>
        </Swiper>
       

    </div>
  )
}

export default MobileSwiper