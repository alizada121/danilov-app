import React from "react";
import HeaderBlack from "../HeaderBlack/HeaderBlack";
import '../Collection/Collection.css'
import line2 from '../../Images/Line 000.svg';
import brownShoes from '../../Images/brownShoes.jpg'
const Collection =()=>{
    return(
        <div>
      <HeaderBlack/>
      <div className="middlepart">
        <div className="whats">
           <p className="home">Home/What’s New </p>
        <div className="coll">
          <h1 className="collect">Collections</h1>
          <img src={line2}/>
        </div>
         <div className="nazvanie">
          <img src={brownShoes}/>
          <div className="whitetext">
            <p className="summ">Spring & Summer ‘22</p>
          <h1 className="kollekci">Nazvanie Kollekcii</h1>
          </div>
          
        </div>
        </div>
       
       
      </div>
        </div>
    )
}
export default Collection