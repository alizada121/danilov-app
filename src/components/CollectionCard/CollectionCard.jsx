
import React,{useRef,useState} from 'react'
import blackHeart from "../../assets/blackHeart.png"
import vectorLeft from "../../assets/vectorLeft.png"
import vectorRight from "../../assets/vectorRight.png"
import "../CollectionCard/CollectionCard.css"
import ShopSlider from '../home/Leman/Shop/ShopSlider'
import whiteHeart from "../../assets/whiteHeart.svg"
import aggash from "../../assets/shopSlider1.png"

function CollectionCard(props) {

    const infoRef=useRef();
    const heartRef=useRef();
    
    const [toggle,setToggle]=useState(false);

    const fillHeart=()=>{
      if(!toggle){
        heartRef.current.style.fill="black"
        console.log("dahjsk")
      
      setToggle(true)
    }else{
      heartRef.current.style.fill="none"
      setToggle(false)
    }
}

   
  return (
    <div className={` ${props.faiz} ShopSlider-card`}>
       <div className="col-card">  
       <svg className='heart' ref={heartRef} onClick={fillHeart} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00025 15C0.54919 8 1.00543 4.65368 1.00543 4.65368C1.00543 2.63545 2.68693 1 4.76198 1C6.14169 1 7.34755 1.72344 7.9996 2.80138C8.6523 1.72344 9.85817 1 11.2379 1C13.2793 1 14.9395 2.58265 14.9931 4.55563C14.9944 4.60465 14.9957 4.65305 14.9983 4.70207C15.0203 5.13576 14.9343 8.48586 8.00025 15Z" stroke="#1B1B1B" stroke-miterlimit="10"/>
      </svg>

           <div className="col-img">
               <img src={props.img}></img>

           </div>

           <div className="col-info" ref={infoRef}>
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