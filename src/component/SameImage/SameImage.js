import React ,{useState ,useEffect} from "react";
import '../SameImage/SameImage.css';
import shoe1 from '../../Images/remove1.png';
import shoe3 from '../../Images/remove3.png';
import Borderimage from "../BorderImage/BorderImage";

const SameImage =({setImgC})=>{
    
   
  
    return(
        <div className="imageCont">
                <div className={`image1 ${setImgC && 'activeimg'} `}>
                   <img src={shoe1}/>  
                </div>
               
                <Borderimage setImgC={setImgC}/>
               <div className={`image3 ${setImgC && 'activeimg3'} `}>
                    <img src={shoe3}/>  
               </div>
             
    {setImgC &&
           
                <div className={`image1 ${setImgC && 'activeimg'} `}>
                <img src={shoe3}/>  
                 </div>
       }
            </div>
    )
}
export default SameImage