import React from "react";
import '../Delivery/Delivery.css';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import ImageHeader from "../ImageHeader/ImageHeader";
import Button from '../Button/Button'
const Delivery = ({btnclass }) => {
   
    return (
        <div >
            <HeaderBlack />
            <div className="deliveryDiv">
                <ImageHeader title={'Home  /  Bag'} titleH1={'Delivery 1'} />
                <div className="inputSide">
                    <p className="contact">Contact</p>
                    <div className="acc">
                        <p className="add">Email address </p>
                        <p className="add">Do you have an account?<span className="add1">Login</span></p>
                    </div>
                    <div className="email">
                        <label htmlFor="email"></label>
                        <input type="email" placeholder="namesurname@email.com" id="email" name="email"></input>
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
                            <p className="addred">*Error</p>
                        </div>
                        <div className="email1">
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
                        <input type="checkbox" id="scales" name="scales"></input>
                           
                            <label htmlFor="scales">Save this informations for a future fast checkout</label>
                    </div>
                    <Button btnclass={true}/>
                </div>
            

            </div>

        </div>
    )
}
export default Delivery