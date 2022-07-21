import React,{useState,useEffect,useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from 'gsap'
import "../Shop/ShopSlider.css"
import blackHeart from "../../../../assets/blackHeart.png"
import vectorLeft from "../../../../assets/vectorLeft.png"
import longLine from "../../../../assets/longLine.png"
import vectorRight from "../../../../assets/vectorRight.png"
import ShopSlider1 from "../../../../assets/shopSlider1.png"
import ShopSlider2 from "../../../../assets/shopSlider2.png"
import ShopSlider3 from "../../../../assets/shopSlider3.png"
import ShopSlider4 from "../../../../assets/ShopSlider4.png"
import ShopSlider5 from "../../../../assets/shopSlider5.png"
import vectorUp from "../../../../assets/Vector-up.png"
import vectorDown from "../../../../assets/Vector -down.png"
import line from "../../../../assets/Line 3.png"
import mobline from "../../../../assets/line5.svg"
import Card from "../../../Card/Card.jsx"

import data from "../../../../Data.json"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";






function ShopSlider({dimensions }) {
    // console.log(klassName)
    const [slice1,setSlice1]=useState(0);
    const [slice2,setSlice2]=useState(3);
    const additionValue=3
    const Slider1Ref=useRef();
    const Slider2Ref=useRef();
    const Slider3Ref=useRef();
    const generalSliderRef=useRef();
  
    const [counter,setCounter]=useState(0);
   
    // data.map(e => console.log(e))
    useEffect(()=>{
        if(dimensions.width < 1024) setSlice2(1)
        else setSlice2(3)
    },[dimensions.width])
//    console.log(dimensions)

    const  upFunc1=()=>{
      
        // setCounter(counter+1)
        // console.log(counter)
        // //conterle
       

        // if(counter==0){
            
        //     gsap.fromTo(Slider1Ref.current,{yPercent:"0",ease: "power2.out"}, { yPercent:"-100",ease: "power2.out"});
        //     gsap.to(Slider2Ref.current, { y:"0",ease: "power2.out"});
        // }

        // if(counter==1){
           
        //     gsap.to(Slider2Ref.current, { yPercent:"-150",ease: "power2.out"});
        //     gsap.to(Slider3Ref.current, { y:"0",ease: "power2.out"});
           

        // }  

        // if(counter>1){
           
        //    setCounter(2)
           

        // }  


        


       
      
    }

    const downFunc1=()=>{
    //     setCounter(counter-1)
    //     console.log(counter)

    //    if(counter==2){
    //     gsap.to(Slider3Ref.current, { yPercent:"150",ease: "power2.out"});
    //     gsap.to(Slider2Ref.current, { yPercent:"0",ease: "power2.out"});
    //    }

    //    if(counter==1){
    //     gsap.to(Slider2Ref.current, { yPercent:"150",ease: "power2.out"});
    //     gsap.to(Slider1Ref.current, { yPercent:"0",ease: "power2.out"});
    //    }

        


    }

   
   
  return (

    
    <div className='ShopSlider-container'>
       
         
        <div className='ShopSlider-container-heading'>
            <h1>
                Shop
            </h1>

        </div>
       

        <div className='swiper-web-cont'>
        <svg className="line-vector" width="2" height="210" viewBox="0 0 2 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <line x1="0.75" y1="-2.18557e-08" x2="0.750006" y2="210" stroke="#1B1B1B" stroke-width="1.5"/>
        </svg>

                
                
               

       
        <Swiper
                    direction={"vertical"}
                loop={true}
                navigation={true} modules={[Navigation]}
                className="mySwiper"
        >
         <div className='ShopSlider-slider' >

        

           <div className='ShopSlider-slider-itself' ref={generalSliderRef}>
          
                <SwiperSlide>
                <div className='ShopSlider-slider-part1' ref={Slider1Ref} >
                {data.slice(slice1,slice2).map((item) => {
                    return (
                        <Card 
        
                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'otuz'
                    

                        />
                    )
                })}

                </div>
                
                
</SwiperSlide>

                <SwiperSlide><div className='ShopSlider-slider-part1 part2' ref={Slider2Ref} >
                {data.slice(3,6).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'otuz'


                        />
                    )
                })}

                </div></SwiperSlide>

                <SwiperSlide><div className='ShopSlider-slider-part1 part3' ref={Slider3Ref} >
                {data.slice(6,9).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'otuz'


                        />
                    )
                })} 
                
           
               

                </div> </SwiperSlide>
         
           
          </div>
          <div className='vector-line'>
                <h1>
                    salam
                </h1>
                    <img src={line}></img>
            </div>
               
            
          

          

        </div></Swiper>  
         </div>

        
      
        <div className='swiper-mob-cont'>
            <img src={mobline} className="mob-line"></img>
  <Swiper navigation={true} modules={[Navigation]}   loop={true}  noSwiping= {true} onlyExternal={ true} noSwipingClass= "swiper-slide" className="mySwiper">

        <SwiperSlide> <div className='mobile-card'>
                {data.slice(0,1).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'otuz'


                        />
                    )
                })} 


            </div></SwiperSlide>

            <SwiperSlide> <div className='mobile-card'>
                {data.slice(1,2).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'otuz'


                        />
                    )
                })} 


            </div></SwiperSlide>

            <SwiperSlide> <div className='mobile-card'>
                {data.slice(2,3).map((item) => {
                    return (
                        <Card 

                        name={item.name} 
                        price={item.price}
                        desc={item.desc} 
                        img={item.img}
                        img2={item.pmg}
                        key={Math.random()}
                        faiz= 'otuz'


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
                    <img  src={vectorRight}></img>

                </div>
                

            </div>
             </Swiper>

           
       
        
       
 </div> 

       
       
    </div>
  )
}

export default ShopSlider