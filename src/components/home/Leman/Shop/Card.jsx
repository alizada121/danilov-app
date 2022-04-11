import React from 'react'
import blackHeart from "../../../../assets/blackHeart.png"
import vectorLeft from "../../../../assets/vectorLeft.png"
import vectorRight from "../../../../assets/vectorRight.png"

function Card(props) {
    console.log(props);
  return (
    <div className='ShopSlider-card'>
    <div className='shopSlider-blackHeart'>
      <img src={blackHeart}></img>
    </div>

    <div className='card-info'>
       <div className='card-name'>
        <div className='card-name-main'>
           <h1>{props.name}</h1>
       </div>
       <div className='card-name-para'>
            <h4>{props.desc}</h4>
       </div>
       </div>

       <div className='card-price'>
           <p>{props.price}</p>
            
       </div>

    </div>

    <div className='card-img-container'>
        <div className='vector-left'>
            <img src={vectorLeft}></img>
        </div>

        <div className='card-img'>
              <img src={props.img} alt="" />
        </div>

        <div className='vector-right'>
            <img src={vectorRight}></img>
        </div>

    </div>
</div>
  )
}

export default Card