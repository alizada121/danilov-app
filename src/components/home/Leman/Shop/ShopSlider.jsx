import React,{useState,useEffect} from 'react'
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
import Card from "../../../Card/Card.jsx"

import data from "../../../../Data.json"



function ShopSlider({dimensions}) {

    const [slice,setSlice]=useState(3);

    useEffect(()=>{
        if(dimensions.width < 1024) setSlice(1)
        else setSlice(3)
    },[dimensions.width])
   console.log(dimensions)

    

   
   
  return (
    <div className='ShopSlider-container'>
        <div className='ShopSlider-container-heading'>
            <h1>
                Shop
            </h1>

        </div>

        <div className='ShopSlider-slider'>
            <div className='ShopSlider-slider-part1'>
            {data.slice(0,slice).map((item) => {
                return (
                    <Card 
                    name={item.name} 
                    price={item.price}
                    desc={item.desc} 
                    img={item.img}
                    key={Math.random()}
                    faiz= 'otuz'


                    />
                )
            })}

            </div>

            <div className='ShopSlider-slider-part2'>

            </div>

            <div className='ShopSlider-slider-part3'>
        
            </div>

            <div className='card-navigation-container'>
                <div className='vector-up'>
                    <img src={vectorUp}></img>
                </div>

                <div className='vector-line'>
                    <img src={line}></img>
                </div>

                <div className='vector-down'>
                    <img src={vectorDown}></img>
                </div>
                

            </div>

            <div className='card-navigation-mobile-cont'>

                <div className='vector-left'>
                    <img src={vectorLeft}>
                    </img>

                </div>

                <div className='line-vector'>
                    <img src={longLine}></img>

                </div>

                <div className='vector-right'>
                    <img  src={vectorRight}></img>

                </div>
                

            </div>

        </div>

    </div>
  )
}

export default ShopSlider