import React,{useRef,useState} from 'react'
import back from "../../assets/backMenu.png"
import up from "../../assets/dropUp.png"
import down from "../../assets/dropDown.png"
import gsap from 'gsap';

import "../Hamburger/HamMenu.css"
import userEvent from '@testing-library/user-event';



function HamMenu() {
    const hamRef=useRef();
    const dropDropRef1=useRef();
    const dropDropRef2=useRef();
    const dropDropRef3=useRef();
    const p1=useRef();
    const p2=useRef();
    const [down1,setDown1]=useState(false);
    const [down2,setDown2]=useState(false);
    const [down3,setDown3]=useState(false);




    const Down1=()=>{

        if(!down1){
            setDown1(true)
            // dropDropRef.current.style.display="block"
           
            gsap.to(dropDropRef1.current, { height:"auto",duration:"0.5" }
            );
           
 
            // dropDropRef.current.style.height="auto"



        }else{
            setDown1(false)
            gsap.to(dropDropRef1.current, { height:"0",duration:"0.5" }
            );
           
 
            // dropDropRef.current.style.height="0"
            
           
        }
    }

    const Down2=()=>{

        if(!down2){
            setDown2(true)
            // dropDropRef.current.style.display="block"
           
            gsap.to(dropDropRef2.current, { height:"auto",duration:"0.5" }
            );
           
 
            // dropDropRef.current.style.height="auto"



        }else{
            setDown2(false)
            gsap.to(dropDropRef2.current, { height:"0",duration:"0.5" }
            );
           
 
            // dropDropRef.current.style.height="0"
            
           
        }
    }

    const Down3=()=>{

        if(!down3){
            setDown3(true)
            // dropDropRef.current.style.display="block"
           
            gsap.to(dropDropRef3.current, { height:"auto",duration:"0.5" }
            );
           
 
            // dropDropRef.current.style.height="auto"



        }else{
            setDown3(false)
            gsap.to(dropDropRef3.current, { height:"0",duration:"0.5" }
            );
           
 
            // dropDropRef.current.style.height="0"
            
           
        }
    }



    
  return (
    <div className='hamburger-general' ref={hamRef}>
        <div className='backTo'>
            <img src={back} ></img>

        </div>

        <div className='main-ham'>
            <div className='dropdown'>
                <div className='main-dropdown'>
                    <div className='dropdown-show'>
                    <h3 >About Us</h3>
                    <div onClick={Down1}  className={down1 ? "dropUp1" : "dropDown1"} ></div>

                    </div>
                    
                    <div className='drop-dropdown' ref={dropDropRef1}>
                        <p ref={p1}>Salam</p>
                        <p ref={p2}>necesen</p>

                    </div>

                </div>

            </div>

            <div className='dropdown'>
            <div className='main-dropdown'>
                <div className='dropdown-show'>
                    <h3  >Man</h3>
                    <div onClick={Down2}  className={down2 ? "dropUp2" : "dropDown2"} ></div>



                </div>

                <div className='drop-dropdown' ref={dropDropRef2}>
                    <p>hello</p>
                    <p>ne var</p>

                </div>
                   

                </div>
            </div>

            <div className='dropdown'>
            <div className='main-dropdown'>
            <div className='dropdown-show'>
                    <h3  >Profile</h3>
                    <div onClick={Down3}  className={down3 ? "dropUp3" : "dropDown3"} ></div>



                </div>

                <div className='drop-dropdown' ref={dropDropRef3}>
                    <p>hello</p>
                    <p>ne var</p>

                </div>
                
            </div>
                   
            </div>

        </div>


       

    </div>
  )
}

export default HamMenu