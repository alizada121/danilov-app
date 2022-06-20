import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";

// import "./"
import Header from "../../Header/Header";
import './HomePage.css'
import line from '../../../Images/Vector1.svg'
import upImg from '../../../Images/upImg.svg'
import pass from '../../../Images/pass.svg'
import Arrival from "./Arrivals/Arrival";
import Shop from "../Leman/Shop1/Shop";

import WinterCollection from "./WinterCollection/WinterCollection";
import Winter from "./Winter/Winter";
import HeaderWhite from "../../HeaderWhite/HeaderWhite";




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

const HomePage = (props) => {
  const arrival=useRef();


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

  const scrollTop = () =>{   window.scrollTo({top: 0});};

  

  

  
  return <div>

    <div className="homePage">
      <HeaderWhite dimensions={dimensions} />
      <div className="middle">
        <p className="middle_p">Spring & Summer ‘22</p>
        <h1 className="thunder">Thunder Collection</h1>
        <Link to="/collection" className="disco-link" onClick={scrollTop}>
        <div className="distance_box">
         
          <p className="disco">Discover  </p>
          
          <div className="anyW">
            <div className="divS"></div> <img className="distance" src={pass} />
          </div>

        </div>
        </Link>

      </div>
      {(dimensions.width < 800) && <div className="arrow" >
      
   
      <img className="upImg" src={upImg} onClick={() => window.scrollTo(0,700)} />
   
    </div>}


    </div>
    

    <Arrival className="arrival-homepage" id="arrival"ref={arrival}/>
    <Shop />
    {/* <WinterCollection/> */}
    <Winter />
  </div>
}
export default HomePage






