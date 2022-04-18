import React from "react";
import '../BorderImage/BorderImage.css'
import heart from '../../Images/heart.svg';
import leftvector from '../../Images/leftvector.svg'
import rightvector from '../../Images/rightvector.svg'
import shoe2 from '../../Images/remove2.png';
const Borderimage =({setImgC})=>{
    return(
        <div className={`borderImg ${setImgC && 'activeimg2'} `}>
                    <img className="leftvector" src={leftvector}/>
                   <img className={`shoe2 ${setImgC && 'activeshoe2'} `} src={shoe2}/>  
                   <img className="rightvector"  src={rightvector}/>
                   <div className="element">
                       <img className="heart" src={heart}/>
                       <div className="bottom">
                           <div className="uptext">
                               <p>Demedim</p>
                           </div>
                           
                     <div className="money">
                          <p>Dedim</p>    
                          <span>700$</span>
                     </div>
                       </div>
                     
                   
                   </div>
                   
                </div>
    )
}
export default Borderimage