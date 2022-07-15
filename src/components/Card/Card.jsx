import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import blackHeart from "../../assets/blackHeart.png"
import vectorLeft from "../../assets/vectorLeft.png"
import vectorRight from "../../assets/vectorRight.png"
import "../Card/Card.css"
import ShopSlider from '../home/Leman/Shop/ShopSlider'
import whiteHeart from "../../assets/whiteHeart.svg"
import "swiper/css";
import "swiper/css/navigation";

import data from "../../Data.json"

import { Navigation } from "swiper";


import gsap from 'gsap'
function Card(props) {
  console.log({ props, c: 'current' })
  // console.log(props.img + " img1");
  // console.log(props.img2 + " img2")


  // console.log(props);
  const ShopSlider = useRef();
  const hoverAttachents1 = useRef();
  const leftRef = useRef();
  const rightRef = useRef();


  const hoverOn = () => {
    hoverAttachents1.current.style.opacity = "1"
    leftRef.current.style.opacity = "1"
    rightRef.current.style.opacity = "1"

  }

  const hoverOff = () => {

    img1.current.style.xPercent = "0"
    img2.current.style.xPercent = "0"

    hoverAttachents1.current.style.opacity = "0"
    leftRef.current.style.opacity = "0"
    rightRef.current.style.opacity = "0"

  }

  const img1 = useRef();
  const img2 = useRef();
  
  const [active, setActive] = useState(false)



  const whiteHeartRef = useRef();
  const [toggle, setToggle] = useState(false);

  const fillHeart = () => {
    if (!toggle) {
      whiteHeartRef.current.style.fill = "black"
      console.log("dahjsk")

      setToggle(true)
    } else {
      whiteHeartRef.current.style.fill = "none"
      setToggle(false)
    }

  }

  const [prevToggle, setPrevToggle] = useState(false)
  const [nextToggle, setNextToggle] = useState(true)

  const sliderPrev = () => {
    setPrevToggle(true)
    if (prevToggle) {
      img1.current.style.opacity = "0"
      img2.current.style.opacity = "1"
 
      console.log(prevToggle)
      setPrevToggle(false)
    }else {
      img1.current.style.opacity = "1"
      img2.current.style.opacity = "0"

      setPrevToggle(true)

    }

  }

  const sliderNext = () => {
    setNextToggle(true)
    if (nextToggle) {
      img2.current.style.opacity = "0"
      img1.current.style.opacity = "1"

      console.log(nextToggle)
      setNextToggle(false)
    } else {
      img2.current.style.opacity = "1"
      img1.current.style.opacity = "0"
      setNextToggle(true)

    }

  }


  // const [slideIndex, setSlideIndex] = useState(1)
  // const nextSlide = () => {
  //   if (slideIndex !== data.length) {
  //     setSlideIndex(slideIndex + 1)
  //   }
  //   else if (slideIndex === data.length) {
  //     setSlideIndex(1)
  //   }
  // }

  // const prevSlide = () => {
  //   if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1)
  //   }
  //   else if (slideIndex === 1) {
  //     setSlideIndex(data.length)
  //   }
  // }

  return (
    <>


      <div className={` ${props.faiz} ShopSlider-card`} ref={ShopSlider} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>

        <div className='card-hover-wrapper'>


          <div className='card-hover' ref={hoverAttachents1}>


            <div className='shopSlider-blackHeart'>

              <svg ref={whiteHeartRef} onClick={fillHeart} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00025 15C0.54919 8 1.00543 4.65368 1.00543 4.65368C1.00543 2.63545 2.68693 1 4.76198 1C6.14169 1 7.34755 1.72344 7.9996 2.80138C8.6523 1.72344 9.85817 1 11.2379 1C13.2793 1 14.9395 2.58265 14.9931 4.55563C14.9944 4.60465 14.9957 4.65305 14.9983 4.70207C15.0203 5.13576 14.9343 8.48586 8.00025 15Z" stroke="#1B1B1B" stroke-miterlimit="10" />
              </svg>


            </div>

            <div className="card-info">

              <div className='card-name'>
                <div className='card-name-main'>
                  <h1>{props.name}</h1>
                </div>

              </div>

              <div className='card-price'>
                <div className='card-name-para'>
                  <h4>{props.desc}</h4>
                </div>
                <div className='price'>
                  <p>{props.price}</p>
                </div>


              </div>

            </div>
          </div>
        </div>

        <div className="cardWrap">

          <img src={vectorLeft} ref={leftRef} className="rightVector" onClick={sliderPrev}></img>
          <div className='card-img'>
            <div className='card-images'>
              <img src={props.img} className="img1" alt="sagol" ref={img2}></img>
              <img src={props.img2} className="img2" alt="salam" ref={img1}></img>
             
            </div>

          </div>
          <img src={vectorRight} ref={rightRef} className="leftVector" onClick={sliderNext}></img>
        </div>








      </div>



    </>
  )
}

export default Card