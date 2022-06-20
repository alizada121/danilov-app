import React from 'react'
import "../Leman/GreenShop.css"
import Shop1 from "../../../assets/Shop1.png"
import { Link } from 'react-router-dom'

function GreenShop() {

    const scrollTop = () =>{   window.scrollTo({top: 0});};
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
                    <Link to="/collection" onClick={scrollTop}>
                    <button><p>Buy Now</p></button>
                    </Link>

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