
import React,{useRef,useState} from 'react'
import blackHeart from "../../assets/blackHeart.png"
import vectorLeft from "../../assets/vectorLeft.png"
import vectorRight from "../../assets/vectorRight.png"
import "../CollectionCard/CollectionCard.css"
import ShopSlider from '../home/Leman/Shop/ShopSlider'
import whiteHeart from "../../assets/whiteHeart.svg"
import aggash from "../../assets/shopSlider1.png"
function CollectionCard(props) {
  return (
    <div className={` ${props.faiz} ShopSlider-card`}>
       <div className="col-card">
           <div className="col-heart">
               <img src={whiteHeart}>
               </img>

           </div>

           <div className="col-img">
               <img src={props.img}></img>

           </div>

           <div className="col-info">
               <div className='col-info-1'>
                   <h2>{props.name}</h2>
                   <p>{props.price}</p>

               </div>

               <div className="col-info-2">
                   <p>{props.desc}</p>

               </div>

           </div>
       </div>
    </div>
  )
}

export default CollectionCard