import React from "react";
import '../RightAsideBag/RightAsideBag.css';
import Button from '../Button/Button';
const RightAsideBag = ({ showButton, changeStyle }) => {
    return (
        <div className={`rightAsideBag ${changeStyle && 'cc'}`}>
            <div className="free">
                <p className="one">Delivery</p>

                <div className="yazilar">
                    <div className="div1">
                        <p className="two">Free</p>
                    </div>



                    <div className="div2">
                        <p className="ghgh">Express: 10$</p>
                        <div className="bottomxet"></div>
                    </div>



                </div>


            </div>
            <div className="divdiscount">
                <div className="discount" id="iddiscount">
                    <p className="one">Subtotal</p>
                    <p className="two">1 466$</p>
                </div>
                <div className="discount" id="iddiscount">
                    <p className="two">Discount</p>
                    <p className="two">0.00$</p>
                </div>
                <div className="discount" id='discount'>
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
                showButton && <Button btnclass={false} changeStyle={true} />
            }




        </div>
    )
}
export default RightAsideBag;