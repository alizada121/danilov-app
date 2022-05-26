import React from "react";
import '../Login/Login.css';
import Delivery from "../Delivery/Delivery";
const Login =({showPassword ,textHeader1 ,editInput})=>{
    return(
        <div>
           <Delivery showPassword={true} textHeader1={true} showing={true} editInput={true}/>
  
        </div>
    )
}
export  default Login