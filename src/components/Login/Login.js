import React from "react";
import '../Login/Login.css';
import Delivery from "../Delivery/Delivery";
const Login =({showPassword ,textHeader1})=>{
    return(
        <div>
           <Delivery showPassword={true} textHeader1={true} showing={true}/>
  
        </div>
    )
}
export  default Login