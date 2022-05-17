import React, { useState, useEffect } from "react";
// import '../SameImage/SameImage.css';
import shoe1 from '../../Images/remove1.png';
import shoe3 from '../../Images/remove3.png';
import Borderimage from "../BorderImage/BorderImage";
import './SameImage.css'
import leftvector from '../../Images/leftvector.svg'
import rightvector from '../../Images/rightvector.svg'
import heart from '../../Images/heart.svg';
import shoe2 from '../../Images/remove2.png';
import dataSlider from '../../components/home/Shirin/Shop/DataSlider';
import qara from '../../Images/qara.svg';
import SliderShoes from "./SliderShoes/SliderShoes";
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

const SameImage = ({ setImgC, setDist ,vector }) => {
    const [current, setCurrent] = useState(0);
    let counter = true
    const blackSrc=(e)=>{
       e.target.src = counter ? qara : heart
       counter = !!!counter
    }
    
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
   
           <div>
            {(dimensions.width > 820) &&
                <div className="imageCont">
                    <SliderShoes/>

                   <SliderShoes/>
                      <SliderShoes/>

                    {setImgC &&

                        <div className={`image1 ${setImgC && 'activeimg'} `}>

                            <img className={` ${setDist && 'act'}`} src={shoe3} />
                        </div>
                    }


                </div>
            }

            {(dimensions.width <= 820) &&
               
                
                     <SliderShoes vector={true}/>
              
                // <div className={`borderImg ${setImgC && 'activeimg2'}`} id={`${setDist && 'idRandom'}`}>

                //     <div className="borderimgdist">
                //         <img className={`leftvector ${setDist && 'leftvector1'}`} src={leftvector} />
                //         <img className={`shoe2 ${setImgC && 'activeshoe2'}  ${setDist && 'shoesmiddle'}`} src={shoe2} />
                //         <img className={`rightvector ${setDist && 'rightvector1'}`} src={rightvector} />
                //     </div>

                //     <div className={`element ${setDist && 'element1'} `}>
                //         <img className="heart" src={heart} onClick={blackSrc} />
                //         <div className="bottom">
                //             <div className="uptext">
                //                 <p>Demedim</p>
                //             </div>

                //             <div className="money">
                //                 <p>Dedim</p>
                //                 <span> bir qerar ver</span>
                //             </div>
                //         </div>


                //     </div>

                // </div>

            }

            </div>

    )
}
export default SameImage