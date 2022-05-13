import React,{useRef,useState} from 'react'
import blackHeart from "../../assets/blackHeart.png"
import vectorLeft from "../../assets/vectorLeft.png"
import vectorRight from "../../assets/vectorRight.png"
import "../Card/Card.css"
import ShopSlider from '../home/Leman/Shop/ShopSlider'
import whiteHeart from "../../assets/whiteHeart.svg"
 
import gsap from 'gsap'
function Card(props) {
    // console.log(props);
    const ShopSlider=useRef();
    const hoverAttachents1=useRef();
    const leftRef=useRef();
    const rightRef=useRef();


     const hoverOn=()=>{
       hoverAttachents1.current.style.opacity="1"
       leftRef.current.style.opacity="0"
       rightRef.current.style.opacity="1"

     }

     const hoverOff=()=>{ 

     img1.current.style.xPercent="0"
     img2.current.style.xPercent="0"

      hoverAttachents1.current.style.opacity="0"
      leftRef.current.style.opacity="0"
      rightRef.current.style.opacity="0"
       
    }
     
    const img1=useRef();
    const img2=useRef();
   const [active,setActive]=useState(false)

    const Slider1=()=>{

      
      gsap.to(img1.current, { xPercent:0});
      gsap.to(img2.current, { xPercent:0});

      leftRef.current.style.opacity="0"
      rightRef.current.style.opacity="1"
     

     
    }

    const Slider2=()=>{
      gsap.to(img1.current, { xPercent:-100});
      gsap.to(img2.current, { xPercent:-100});

      leftRef.current.style.opacity="1"
      rightRef.current.style.opacity="0"

  
    
     
    }

    const  whiteHeartRef=useRef();
    const [toggle,setToggle]=useState(false);

    const fillHeart=()=>{
      if(!toggle){
         whiteHeartRef.current.style.fill="black"
        console.log("dahjsk")
      
      setToggle(true)
    }else{
      whiteHeartRef.current.style.fill="none"
      setToggle(false)
    }
     
     
    }

    

  return (
    <div className={` ${props.faiz} ShopSlider-card`} ref={ShopSlider} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>

      <div className='card-hover-wrapper'>

      
      <div className='card-hover' ref={hoverAttachents1}>

     
    <div className='shopSlider-blackHeart'>
     
      <svg  ref={whiteHeartRef} onClick={fillHeart} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00025 15C0.54919 8 1.00543 4.65368 1.00543 4.65368C1.00543 2.63545 2.68693 1 4.76198 1C6.14169 1 7.34755 1.72344 7.9996 2.80138C8.6523 1.72344 9.85817 1 11.2379 1C13.2793 1 14.9395 2.58265 14.9931 4.55563C14.9944 4.60465 14.9957 4.65305 14.9983 4.70207C15.0203 5.13576 14.9343 8.48586 8.00025 15Z" stroke="#1B1B1B" stroke-miterlimit="10"/>
      </svg>

      
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
        <div className='vector-left' onClick={Slider1} ref={leftRef}>
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M15 5.32706V6.64636H2.82407C2.82407 6.64636 5.32885 8.12185 7.58877 12C6.03693 12 6.06506 12 6.06506 12C6.06506 12 3.34521 7.69814 -1.14441e-05 5.99502C3.34521 4.36832 6.13951 0 6.13951 0H7.63179C7.63179 0 5.19815 4.04099 2.86874 5.36029C4.78785 5.33703 15 5.32706 15 5.32706Z" fill="#1B1B1B"/>
</svg>
        </div>

        <div className='card-img'>
          <div className='card-images'>

         
              <img src={props.img} alt=""  ref={img1}/>
              <img src={props.img} ref={img2}></img> 
             </div>
        </div>

        <div className='vector-right'  onClick={Slider2}ref={rightRef}>
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5.32779V6.64728H12.5703C12.5703 6.64728 10.0358 8.12298 7.74899 12.0017C9.31927 12.0017 9.29081 12.0017 9.29081 12.0017C9.29081 12.0017 12.043 7.69921 15.428 5.99585C12.043 4.36892 9.21548 0 9.21548 0H7.70546C7.70546 0 10.168 4.04155 12.5251 5.36103C10.5832 5.33776 0 5.32779 0 5.32779Z" fill="#1B1B1B"/>
        </svg>

        </div>

    </div>
</div>
  )
}

export default Card