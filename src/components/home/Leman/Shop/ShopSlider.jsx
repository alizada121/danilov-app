import React from 'react'
import "../Shop/ShopSlider.css"
import blackHeart from "../../../../assets/blackHeart.png"
import vectorLeft from "../../../../assets/vectorLeft.png"
import vectorRight from "../../../../assets/vectorRight.png"
import ShopSlider1 from "../../../../assets/shopSlider1.png"
import ShopSlider2 from "../../../../assets/shopSlider2.png"
import ShopSlider3 from "../../../../assets/shopSlider3.png"
import ShopSlider4 from "../../../../assets/ShopSlider4.png"
import ShopSlider5 from "../../../../assets/shopSlider5.png"
import vectorUp from "../../../../assets/Vector-up.png"
import vectorDown from "../../../../assets/Vector -down.png"
import line from "../../../../assets/Line 3.png"
import Card from "./Card.jsx"

import data from "../../../../Data.json"



function ShopSlider() {
  return (
    <div className='ShopSlider-container'>
        <div className='ShopSlider-container-heading'>
            <h1>
                Shop
            </h1>

        </div>

        <div className='ShopSlider-slider'>
            <div className='ShopSlider-slider-part1'>
            {data.slice(0,3).map((item) => {
                return (
                    <Card name={item.name} 
                    price={item.price}
                    desc={item.desc} 
                    img={item.img}
                    key={item.name}
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

        </div>

    </div>
  )
}

export default ShopSlider