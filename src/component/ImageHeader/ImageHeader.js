import React ,{useState} from "react";
import '../ImageHeader/ImageHeader.css';
import line2 from '../../Images/Line 000.svg';
const ImageHeader=({title , titleH1 ,titlespan , setText, imagetext ,setBorder ,setSpan})=>{
    
   
    return(
        <div className="imageHeader">
        <p className="home">{title}</p>
       
     <div className="coll">
      
         <h1 className="collect">{titleH1}
         {setSpan &&  <span className="borderspan">{titlespan}</span>  }
        
         </h1>
          <div className="flextext">
       {
                                    (() => {
                                        if (setText) {

                                            return (
                                                <p className={`different ${!setBorder && 'activeBorder'} `}>{imagetext}</p>
                                            )
                                        }
                                    })()
                                }
     
       
       <img  className={` ${setText && 'distance'} `} src={line2} /> 
        </div>
     </div>
     </div>
    )
}
export default ImageHeader