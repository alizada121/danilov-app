import React,{useRef} from 'react'
import blackHeart from "../../assets/blackHeart.png"
import vectorLeft from "../../assets/vectorLeft.png"
import vectorRight from "../../assets/vectorRight.png"
import "../Card/Card.css"
import ShopSlider from '../home/Leman/Shop/ShopSlider'
 
function Card(props) {
    // console.log(props);
    const ShopSlider=useRef();
    const hoverAttachents1=useRef();
    const leftRef=useRef();
    const rightRef=useRef();


     const hoverOn=()=>{
       hoverAttachents1.current.style.opacity="1"
       leftRef.current.style.opacity="1"
       rightRef.current.style.opacity="1"

     }

     const hoverOff=()=>{

      hoverAttachents1.current.style.opacity="0"
      leftRef.current.style.opacity="0"
      rightRef.current.style.opacity="0"
       
    }

    

  return (
    <div className={` ${props.faiz} ShopSlider-card`} ref={ShopSlider} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>

      <div className='card-hover-wrapper'>

      
      <div className='card-hover' ref={hoverAttachents1}>

     
    <div className='shopSlider-blackHeart'>
      <img src={blackHeart}></img>
    </div>

    <div className= "card-info">
      
       <div className='card-name'>
        <div className='card-name-main'>
           <h1>{props.name}</h1>
       </div>
      
       </div>

       <div className='card-price'>
          <div className='card-name-para'>
            <h4>{props.desc}</h4>
         </div>
           <p>{props.price}</p>
            
       </div>

    </div>
    </div>
    </div>

    <div className='card-img-container'>
        <div className='vector-left'  ref={leftRef}>
            <img src={vectorLeft}></img>
        </div>

        <div className='card-img'>
              <img src={props.img} alt="" />
        </div>

        <div className='vector-right'ref={rightRef}>
            <img src={vectorRight} ></img>
        </div>

    </div>
</div>
  )
}

export default Card