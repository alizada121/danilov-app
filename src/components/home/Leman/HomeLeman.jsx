import React, { useState,useEffect } from 'react'
import "./HomeLeman.css"
import FooterHome from "../../FooterWhite/FooterHome"
import GreenShop from './GreenShop'
import ShopSlider from './Shop/ShopSlider'
import FollowUs from './FollowUs/FollowUs'
import Footer from '../../Footer/Footer'
import FooterWhite from '../../FooterWhite/FooterWhite'
function HomeLeman({dimensions}) {
  // const [isMobile,setIsMobile] = useState(false)

  // if(dimensions.width>1024){
  //   setIsMobile(false)
  // }else{
  //   setIsMobile(true)
  // }
   


  return (
    <div className='HomeLeman'>
        <GreenShop/>
        <ShopSlider dimensions={dimensions}/>
        <FollowUs/>
        <div className='homepage-footer'>
          <div className='homepage-footer-white'>
              <FooterHome/>
          </div>

          <div className='homepage-footer-black'>
            <FooterWhite dimensions={dimensions}/>
          </div>
                  
                  
        </div>

    </div>
  )
}

export default HomeLeman