import React from "react";
import '../BorderImage/BorderImage.css'
import heart from '../../Images/heart.svg';
import leftvector from '../../Images/leftvector.svg'
import rightvector from '../../Images/rightvector.svg'
import shoe2 from '../../Images/remove2.png';
const Borderimage =({setImgC ,setDist })=>{
    return(
        <div className={`borderImg ${setImgC && 'activeimg2'}` } id={ `${setDist && 'idRandom'}` }>

            <div className="borderimgdist">
                  <img className={`leftvector ${setDist && 'leftvector1'}` } src={leftvector}/>
                   <img className={`shoe2 ${setImgC && 'activeshoe2'  }  ${setDist && 'shoesmiddle'}`  }  src={shoe2}/>  
                   <img className={`rightvector ${setDist && 'rightvector1'}` }  src={rightvector}/>
            </div>
                  
                   <div className={`element ${setDist && 'element1'} `}>
                       <img className="heart" src={heart}/>
                       <div className="bottom">
                           <div className="uptext">
                               <p>Demedim</p>
                           </div>
                           
                     <div className="money">
                          <p>Dedim</p>    
                          <span> bir qerar ver</span>
                     </div>
                       </div>
                     
                   
                   </div>
                   
                </div>
    )
}
export default Borderimage