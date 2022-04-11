import React from "react";
import '../ImageHeader/ImageHeader.css';
import line2 from '../../Images/Line 000.svg';
const ImageHeader=({title , titleH1})=>{
    console.log(title)
    return(
        <div className="imageHeader">
        <p className="home">{title}</p>
       
     <div className="coll">
       <h1 className="collect">{titleH1}</h1>
       <img src={line2} />
     </div>
     </div>
    )
}
export default ImageHeader