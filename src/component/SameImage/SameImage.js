import React ,{useState ,useEffect} from "react";
import '../SameImage/SameImage.css';
import shoe1 from '../../Images/remove1.png';
import shoe3 from '../../Images/remove3.png';
import Borderimage from "../BorderImage/BorderImage";

const SameImage =({setImgC,dimensions , setDist})=>{
    
   
  
    return(
        
        <div className="imageCont">
                <div className={`image1 ${setImgC && 'activeimg'}` }>
                   <img    className={` ${setDist && 'act'} `} src={shoe1}/>  
                </div>
               
                <Borderimage setImgC={setImgC} setDist={setDist}/>
               <div className={`image3 ${setImgC && 'activeimg3'} `}>
                    <img   className={ `${setDist && 'act'} `}  src={shoe3}/>  
               </div>
             
    {setImgC &&
           
                <div className={`image1 ${setImgC && 'activeimg'} `}>
                <img   className={` ${setDist && 'act'}` }  src={shoe3}/>  
                 </div>
       }



            </div>
    )
}
export default SameImage