import React from 'react'
import danilov1 from '../../Images/danilov1.png';
import danilov2 from '../../Images/danilov2.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import mobline from "../../assets/line5.svg"
import "../SingleProduct/SingleProduct.css"
import "swiper/css/navigation";
import "../About/MobileSwiper.css";
import ayaqqabi from '../../assets/shoes/57.jpg';
import shoes9 from '../../assets/shoes/58.jpg';
import shoes10 from '../../assets/shoes/59.jpg';

import { Navigation } from "swiper";
function MobileSwiper() {
  return (
      <div className="swiper-about"><div className='swiper-about-mob-cont'>

        <img src={mobline} className="mob-line mob-line-mobile" id="olcu1"></img>
        <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiperAbout" noSwiping={true} onlyExternal={true} noSwipingClass="swiper-slide" >

          <SwiperSlide><img src={danilov1} className="itself" /></SwiperSlide>
          <SwiperSlide><img src={danilov1} className="itself" /></SwiperSlide>
          
        </Swiper>
      </div></div>



  )
}

export default MobileSwiper