import React ,{useEffect ,useState ,useRef}from "react";
import "../Pop Up/PopUp.css"
const PopUp =({menuOpen})=>{
    const boxRef = useRef();
    console.log(menuOpen)
   
    return(
        <div className={`popup ${menuOpen && "open"}`} ref={boxRef}>
            <p className="pop">Choose size</p>
            <div className="sizeChooseButton">
                <button className="pupUpsize">40</button>
                <button className="pupUpsize">41</button>
                <button className="pupUpsize">42</button>
                <button className="pupUpsize">43</button>
                <button className="pupUpsize">44</button>
                <button className="pupUpsize">45</button>
            </div>
            <p className="pop1">Size guide</p>
        </div>
    )
}
export default PopUp