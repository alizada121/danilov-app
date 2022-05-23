import React from 'react'
import instagram from "../../../../assets/instagram.png"
import brown from "../../../../assets/brownShoes.png"
import gradient from "../../../../assets/gradient.png"
import { Link } from 'react-router-dom/cjs/react-router-dom'

import "../FollowUs/FollowUs.css"
function FollowUs() {
  return (
    <div className='FollowUs-container'>
      <div className='FollowUs'>

       <div className='FollowUs-left'> 
         <div className='FollowUs-heading'>
          <h4>follow us on</h4> 
          <h1>Instagram</h1>

         </div>
        
        
           <div className='FollowUs-danilov'>
           <a href="https://www.instagram.com/danilov_baku/?hl=en" target="_blank"> <p>@danilov_baku</p>
             <img src={instagram}></img></a>
      
      
           </div>
        </div> 
        
      

      
        
        <div className='FollowUs-shoes'>
          <img src={brown} className="brown-shoes"></img>

          


          <div className='gradient-cont'>
            <img src={gradient} ></img>
            <p className='gradient-text'> Bibendum velit semper tristique nulla non ut adipiscing eget mollis. Est ornare in blandit viverra. Scelerisque diam congue.</p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default FollowUs