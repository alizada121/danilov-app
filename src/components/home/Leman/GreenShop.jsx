import React from 'react'
import "../Leman/GreenShop.css"
import Shop1 from "../../../assets/Shop1.png"

function GreenShop() {
  return (
    <div className='GreenShop'>
        <div className='GreenShop-container'>
            <div className='GreenShop-part1'>
                <div className='GreenShop-part1-text'>
                    <div className='GreenShop-header'>
                    <h1 >Shop</h1>
                    </div>
                   
                    <p className='GreenShop-para'>Lacus elit amet volutpat pulvinar. Ultrices placerat ut semper a in nisl, a cursus</p>

                    <div className='GreenShop-part1-button'>
                    <button><p>Buy Now</p></button>

                     </div>
                </div>

            </div>

            <div className='GreenShop-part2'>
                <img src={Shop1}></img>

            </div>

        </div>

    </div>
  )
}

export default GreenShop