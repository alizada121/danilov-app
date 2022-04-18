import React from 'react'
import "./HomeLeman.css"

import GreenShop from './GreenShop'
import ShopSlider from './Shop/ShopSlider'
import FollowUs from './FollowUs/FollowUs'
import Footer from '../../Footer/Footer'
function HomeLeman() {
  return (
    <div className='HomeLeman'>
        <GreenShop/>
        <ShopSlider/>
        <FollowUs/>
        <Footer/>
    </div>
  )
}

export default HomeLeman