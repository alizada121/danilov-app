import React, { useState } from "react";
import HeaderBlack from "../HeaderBlack/HeaderBlack";
import '../Collection/Collection.css'
import ImageHeader from "../ImageHeader/ImageHeader";
import brownShoes from '../../Images/brownShoes.jpg'
import SameImage from "../SameImage/SameImage";



const Collection = () => {
  const [imgc, setImgC] = useState(false);


  return (
    <div>
      <HeaderBlack />
      <div className="middlepart">
        <div className="whats">
     <ImageHeader title={'Home  /  What’s New '} titleH1={'Collections'}/>
         

          <div className="nazvanie">
            <img src={brownShoes} />
            <div className="whitetext">
              <p className="summ">Spring & Summer ‘22</p>
              <h1 className="kollekci">Nazvanie Kollekcii</h1>
            </div>

          </div>
        </div>

      </div>
      <SameImage imgc={imgc} setImgC={!imgc} />

    </div>
  )
}
export default Collection