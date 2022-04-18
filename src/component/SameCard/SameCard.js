import React from "react";
import '../SameCard/SameCard';
import RightAsideBag from '../RightAsideBag/RightAsideBag';
const SameCard=({showButton})=>{
    return(
        <div className="padRight">
        <p className="order">Order summary</p>

        <RightAsideBag showButton={showButton} />

    </div>
    )
}
export default SameCard