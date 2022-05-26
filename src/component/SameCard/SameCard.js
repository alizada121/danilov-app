import React from "react";
import '../SameCard/SameCard.css'
import RightAsideBag from '../RightAsideBag/RightAsideBag';
const SameCard=({showButton , changeStyle})=>{
    return(
        <div className={`padRight ${changeStyle && 'elave'}` }>
        <p className="order">Order summary</p>
        <RightAsideBag showButton={showButton} changeStyle={changeStyle}/>
    </div>
    )
}
export default SameCard