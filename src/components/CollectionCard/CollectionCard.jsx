
import React,{useRef,useState} from 'react'
import blackHeart from "../../assets/blackHeart.png"
import vectorLeft from "../../assets/vectorLeft.png"
import vectorRight from "../../assets/vectorRight.png"
import "../CollectionCard/CollectionCard.css"
import ShopSlider from '../home/Leman/Shop/ShopSlider'
import whiteHeart from "../../assets/whiteHeart.svg"
import aggash from "../../assets/shopSlider1.png"
function CollectionCard() {
  return (
    <div className='general-col-card'>
        <div className='col-card-heart'>
            <img src={whiteHeart}></img>

        </div>
        <div className='card-reverse'>

       

             <div className='col-card-info'>
                 <div className='col-card-name'>
                     <p>Leman</p>      
                 </div>

                 <div className='col-card-desc-price'>
                     <div className='col-card-desc'>
                         <p>Salam</p>

                     </div>
                     <div className='col-card-price'>
                         <p>700</p>

                     </div>

                 </div>

             </div>

             <div className='col-card-img-cont'>

                 <div className='col-card-left'>
                     <img src={vectorLeft}></img>

                 </div>

                 <div className='col-card-img'>
                     <img src={aggash}></img>

                 </div>

                 <div className='col-card-right'>
                     <img src={vectorRight}></img>

                </div>


             </div>

        
        
         </div>

    </div>
  )
}

export default CollectionCard