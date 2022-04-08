import React from "react";
import "../../../src/style.css"
import Header from "../Header/Header";
import '../HomePage/HomePage.css'
import line from '../../Images/Vector1.svg'
import Arrival from "../Arrivals/Arrival";
const HomePage =()=>{
    return <> 

        <div className="homePage">
               <Header/>
               <div className="middle">
              <p className="middle_p">Spring & Summer ‘22</p>
              <h1 className="thunder">Thunder Collection</h1>
              <div className="distance_box">
                   <p className="disco">Discover <img className="distance" src={line}/></p>
              </div>
             
           </div>
           
        </div>
    </>
}
export default HomePage