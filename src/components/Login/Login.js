import React from "react";
import '../Login/Login.css';
import Delivery from "../Delivery/Delivery";
const Login =({showPassword ,textHeader1 ,editInput ,displayDiv })=>{
    return(
        <div>
           <Delivery type = 'login' showPassword={true} textHeader1={true} showing={true} editInput={true} loginText={true} displayDiv={!displayDiv} />
  
        </div>
    )
}
export  default Login