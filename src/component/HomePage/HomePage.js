import React, { useEffect, useState } from "react";
import "../../../src/style.css"
import Header from "../Header/Header";
import '../HomePage/HomePage.css'
import line from '../../Images/Vector1.svg'
import upImg from '../../Images/upImg.svg'

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

const HomePage = () => {

      
        const [dimensions, setDimensions] = React.useState({ 
          height: window.innerHeight,
          width: window.innerWidth
        })
        useEffect(() => {
          const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
              height: window.innerHeight,
              width: window.innerWidth
            })
          }, 1000)
      
          window.addEventListener('resize', debouncedHandleResize)
      
          return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
          
      }
        })
    return <>

        <div className="homePage">
            <Header dimensions = {dimensions}/>
            <div className="middle">
                <p className="middle_p">Spring & Summer ‘22</p>
                <h1 className="thunder">Thunder Collection</h1>
                <div className="distance_box">
                    <p className="disco">Discover <img className="distance" src={line} /></p>
                </div>
             
            </div>
            
          
        </div>
        {(dimensions.width < 800) && <div className="arrow" >
            <img className="upImg" src={upImg}/>
        </div>}
    </>
}
export default HomePage