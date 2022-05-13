import React ,{useEffect ,useState} from "react";
import '../Shop/Shop.css';
import arrowLeft from "../../../../Images/leftvector.svg"
// import arrowMiddle from "../../../../Images/Line 000.svg"
import arrowRight from "../../../../Images/rightvector.svg"
import last from '../../../../Images/lastt.svg'

import SameImage from "../../../../component/SameImage/SameImage";

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
const Shop =({ setDist })=>{

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
    return (
         <div className="pageShop">
            <h1 className="shopping">Shop</h1>
            <SameImage  setDist={false} />
            {(dimensions.width < 820) && <div className="arrows" >
               <img src={arrowLeft}/>
               <img className="arrmidle" src={last}/>
               <img src={arrowRight}/>
        </div>}
    </div>
    )
   
}
export default Shop




