import React from "react";
import shoe from '../../Images/shoes.svg'
import shoe2 from '../../Images/remove0.png'
import '../Arrivals/Arrival.css';
import line from '../../Images/Linear.svg'
const Arrival =()=>{
    return <>
         <div className="arr">
             <h1 className="newArrivals">New Arrivals</h1>
             <div className="imageContainer">
                 <div className="brownImg"><img src={shoe}/></div> 
             
               <div className="blueImg" >
                     <div className="blabla">
                         <img className="blueImage" src={shoe2}/> 
                     </div>
                  
                    <div className="texttwo">
                    <p className="lacus">Lacus elit amet volutpat pulvinar. 
                       Ultrices placerat ut semper a in nisl, a cursus</p>
                       <div className="twice">
                             <p className="seeAll">See all<img className="see" src={line}/></p>
                       </div>
                   
                    </div> 
               </div>
             </div>
               
         </div>
    </>
}
export default Arrival