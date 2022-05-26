
import React  from "react";
import '../Button/Button.css'
const ButtonCheck =({btnclass , changeStyle})=>{
    
   
    return(
        <>
 <div className={`procesDiv ${btnclass && 'witdhDiv'} ${changeStyle && 'value' } `}>
                    <button className={`proceed ${btnclass && 'witdhButton'} `}>
                  <span className="check">Proceed to checkout</span> 
                 </button>  
                 </div>
           
        </>
    )
}
export default ButtonCheck