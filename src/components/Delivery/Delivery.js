import React,{useEffect} from "react";
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
const Delivery = ({  showPassword ,textHeader1 ,showing , editInput }) => {
  
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
             <HeaderBlack dimensions={dimensions}/> 
            <div className="deliveryDiv">
                <ImageHeader title={'Home  /  Bag'} titleH1={'Delivery '} setWitdhh={true} titlespan={'1'} setSpan={true}/>
                <div className="flexDelivery">
                    <div className="leftDeliver" >
                        <div className="inputSide">
                            <p className="contact11">{textHeader1 ? "Login" : "Contact"}</p>
                            <div className="emailPass">
                                <div className={`sameEmail ${showPassword && 'differenPass'} `}>
                                    <div className="acc">
                                        <p className="add">Email address {showing ? '/Number' : ""}</p>
                                        {!showing &&  <p className="add22">Do you have an account?<span className="add1">Login</span></p>
                                        }
                                      
                                    </div>
                                    <div className="email">
                                        <label htmlFor="email"></label>
                                        <input type="email" className={`${editInput && 'lastEdit'} `} placeholder="namesurname@email.com" id="email" name="email"></input>
                                    </div>
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
                                            <input type="password" className={`${editInput && 'lastEdit'} `}  placeholder="***********" id="email" name="password"></input>
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
                                    <input type="name" placeholder="name" id="name"name="name"></input>
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
                                    <input type="name" id="name" name="name"></input>
                                </div>
                                <div className="surname">
                                    <p className="same">Country</p>
                                    <label htmlFor="surname"></label>
                                    <input type="surname" id="surname" name="surname"></input>
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
                    <SameCard showButton={false} />
                </div>
            </div>
            <div className="mesafe">
             <Footer /> 
            </div>
            
        </div>
    )
}
export default Delivery