import React, { useEffect } from "react";
import './Delivery.css';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import ImageHeader from "../ImageHeader/ImageHeader";

import Button from '../../component/Button/Button';
import SameCard from '../../component/SameCard/SameCard';
import Footer from "../../components/Footer/Footer";
function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}
const Delivery = ({ showPassword, textHeader1, showing, editInput }) => {

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    })

    return (
        <div >
            <HeaderBlack dimensions={dimensions} />
            {/* <div className='delivery-heading-container'>
                <div className='delivery-heading-nav'>
                    <p>Home</p>
                    <p>  / Contact</p>
                </div>
                <div className='delivery-heading'>
                    <div className='delivery-heading-first'>
                        <h1>Delivery</h1>

                    </div>

                    <div className='delivery-heading-line'>

                    </div>
                </div>



            </div> */}

            {/* <div className='delivery-heading-container'>
                <div className='collection-nav'>
                    <p>Home </p>
                    <p> / Collection</p>
                </div>

                <div className='collection-heading'>
                    <div className='collection-heading-text'>
                        <h1>Delivery 1</h1>
                    </div>
                    
                    <div className='collection-line-cont'>
                        <div className='collection-line'></div>
                    </div>
                </div>
                

            </div> */}
            <div className='contact-header-copy-del'>
                <div className='collection-heading-cont'>
                    <div className='collection-nav'>
                        <p>Home </p>
                        <p> / Contact</p>
                    </div>

                    <div className='collection-heading'>
                        <div className='collection-heading-text'>
                            <h1>Delivery <span className="birbir">1</span></h1>
                        </div>

                        <div className='collection-line-cont'>
                            <div className='collection-line'></div>
                        </div>
                    </div>


                </div>

            </div>
            <div className="deliveryDiv">
                <div className="flexDelivery">
                    <div className="leftDeliver" >
                        <div className="inputSide">
                            <p className="contact11">{textHeader1 ? "Login" : "Contact"}</p>
                            <div className="emailPass">
                                <div className={`sameEmail ${showPassword && 'differenPass'} `}>
                                    <div className="acc">
                                        <p className="add">Email address {showing ? '/Number' : ""}</p>
                                        {!showing && <p className="add22">Do you have an account?<span className="add1">Login</span></p>
                                        }

                                    </div>

                                    <div className="email">
                                        <label htmlFor="email"></label>
                                        <input type="email" className={`${editInput && 'lastEdit'} `} placeholder="namesurname@email.com" id="email" name="email"></input>
                                    </div>
                                    {dimensions.width < 800 &&
                                        <p className="ashagidaki">Do you have an account?<span className="ashagidaki-login" >Login</span></p>
                                    }
                                </div>

                                {showPassword &&
                                    <div className={`sameEmail ${showPassword && 'differenPass'} `}>
                                        <div className="acc">
                                            <p className="add">Password </p>
                                            {
                                                !showing && <p className="add " >Do you have an account?<span className="add1">Login</span></p>
                                            }


                                        </div>
                                        <div className="email">
                                            <label htmlFor="password"></label>
                                            <input type="password" className={`${editInput && 'lastEdit'} `} placeholder="***********" id="email" name="password"></input>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="inputSide1">
                            <p className="contact1">Shipping info</p>
                            <div className="nameandsur">
                                <div className="name">
                                    <p className="same">Name</p>
                                    <label htmlFor="name"></label>
                                    <input type="name" placeholder="name" id="name" name="name"></input>
                                </div>
                                <div className="surname">
                                    <p className="same">Surname</p>
                                    <label htmlFor="surname"></label>
                                    <input type="surname" placeholder="surname" id="surname" name="surname"></input>
                                </div>
                            </div>
                            <div className="nameandsur">
                                <div className="name">
                                    <p className="same">City</p>
                                    <label htmlFor="name"></label>
                                    <input type="name" id="name" name="name" placeholder="text here"></input>
                                </div>
                                <div className="surname">
                                    <p className="same">Country</p>
                                    <label htmlFor="surname"></label>
                                    <input type="surname" id="surname" name="surname" placeholder="text here"></input>
                                </div>
                            </div>
                            <div className="inputSide">
                                <div className="acc1">
                                    <p className="add">Adress </p>
                                    {
                                        !showPassword && <p className="addred">*Error</p>
                                    }

                                </div>
                                <div className={`email1 ${showPassword && 'differenAdres'} `}>
                                    <label htmlFor="email1"></label>
                                    <input type="adress" placeholder="ADRESS" id="email" name="adress"></input>
                                </div>
                            </div>
                            <div className="inputSide11">
                                <div className="acc">
                                    <p className="add">Phone </p>
                                </div>
                                <div className="email6">
                                    <label htmlFor="email"></label>
                                    <input type="adress" placeholder="(+994 50) 222 21 11)" id="email" name="adress"></input>
                                </div>
                            </div>
                            <div className="checkbox">
                                <input className="chchck" type="checkbox" id="scales" name="scales"></input>
                                <label htmlFor="scales">Save this informations for a future fast checkout</label>
                            </div>
                            <Button btnclass={true} />
                        </div>
                    </div>


                    <div className='Order-summary-container'>
                        <h1>Order summary</h1>
                        <div className='Order-summary'>

                            <div className='Order-delivery'>
                                <h4> Delivery</h4>
                                <div className='delivery-choices'>
                                    <p>Free</p>
                                    <div className="div2">
                                        <p className="ghgh">Express: 10$</p>
                                        <div className="bottomxet"></div>
                                    </div>
                                </div>
                            </div>


                            <div className='Order-subtotal'>
                                <div className='subtotal-row'>
                                    <h5>Subtotal</h5>
                                    <h4 className='normal' id="normal">1 466$</h4>
                                </div>
                                <div className='subtotal-row'>
                                    <p>Discount</p>
                                    <p>0.00$</p>
                                </div>
                                <div className='subtotal-row'>
                                    <p>Delivery</p>
                                    <p>10$</p>
                                </div>

                            </div>

                            <div className='Order-total'>
                                <h4>Total</h4>
                                <h5 className='normal' >1 476$</h5>

                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <div className="mesafe">
                <Footer />
            </div>

        </div>
    )
}
export default Delivery