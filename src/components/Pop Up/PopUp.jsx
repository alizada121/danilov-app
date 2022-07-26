import React ,{useEffect ,useState ,useRef}from "react";
import brownline from "../../Images/shirin/brownline.svg"
import "../Pop Up/PopUp.css"
const PopUp =({menuOpen , toggle})=>{
    const boxRef = useRef();
    console.log(menuOpen)
   
    return(
        <div className={`popup ${menuOpen && "open"}`} ref={boxRef}>
            <div>
                <img src={brownline} onClick={toggle}  />
            </div>
            <p className="pop">Choose size</p>
            <div className="sizeChooseButton">
                <button className="pupUpsize"><p className="sayi">40</p></button>
                <button className="pupUpsize"><p className="sayi">41</p></button>
                <button className="pupUpsize"><p className="sayi">42</p></button>
                <button className="pupUpsize"><p className="sayi">43</p></button>
                <button className="pupUpsize"><p className="sayi">44</p></button>
                <button className="pupUpsize"><p className="sayi">45</p></button>
            </div>
            {/* <p className="pop1">Size guide</p> */}


            <div className="popUpBtn">
                                        <p className="pop1">Size guide</p>
                                        <div className="altdanxett"></div>

                                        
                                    </div>
        </div>
    )
}
export default PopUp