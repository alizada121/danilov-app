import React from 'react'
import "./HomeLeman.css"

import GreenShop from './GreenShop'
import ShopSlider from './Shop/ShopSlider'
import FollowUs from './FollowUs/FollowUs'
function HomeLeman() {
  return (
    <div className='HomeLeman'>
        <GreenShop/>
        <ShopSlider/>
        <FollowUs/>
    </div>
  )
}

export default HomeLeman