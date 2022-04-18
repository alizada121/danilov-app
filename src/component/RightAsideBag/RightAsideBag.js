import React from "react";
import '../RightAsideBag/RightAsideBag.css';
import Button from '../Button/Button';

const RightAsideBag=({showButton})=>{

    return(
        <div className="rightAsideBag">
            <div className="free">
                  <p className="one">Delivery</p>
                   <p className="two">Free Express: 10$</p>
            </div>
            <div className="divdiscount">
                  <div className="discount">
                     <p className="one">Subtotal</p>
                     <p className="two">1 466$</p>
                 </div>
                 <div className="discount">
                     <p className="two">Discount</p>
                     <p className="two">0.00$</p>
                 </div>
                 <div className="discount">
                     <p className="two">Delivery</p>
                     <p className="two">10$</p>
                 </div>
            </div>
            <div className="discount1">
                <div className="total">

                    <p className="oneone">Total</p>
                     <p className="threethree" >1 476$</p> 
                </div>
                    
                 </div>
                {
                    showButton &&  <Button btnclass={false} /> 
                }
                      
                    
                   
               

             </div>
    )
}
export default RightAsideBag;