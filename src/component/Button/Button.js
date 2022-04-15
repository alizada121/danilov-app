import React  from "react";
import '../Button/Button.css'
const ButtonCheck =({btnclass })=>{
    
   
    return(
        <>

 <div className={`procesDiv ${btnclass && 'witdhDiv'} `}>
                    <button className={`proceed ${btnclass && 'witdhButton'} `}>
                  <span className="check">Proceed to checkout</span> 
                 </button>  
                 </div>

           
        </>
     
    )
}
export default ButtonCheck