import React from "react";
import '../ShoppingBag/ShoppingBag.css';
import removeBag from '../../Images/removeBag.png';
import bottomLine from '../../Images/bottomLine.png';
import sizeHeart from '../../Images/sizeHeart.svg';
import sizeDelete from '../../Images/sizeDelete.svg';
// import ustegel from '../../Images/ustegel.png';
// import cixilsin from '../../Images/cixilsin.png'
const ShoppingBag=({setButton ,setLine})=>{
    return(
        <div className="myBag">
        <div className={`leftBag ${setLine && 'borderBtm'} `}>
            <div className="leftBagUp">
                <img src={removeBag} />
            </div>
            <div className="rightBagUp">
                <div className="flexPtag">
                 
                    <div className="tagP">

                        <p className="info">Demedim</p>
                        <p className="info1">733$</p>
                    </div>
                    <p className="alignText"><span className="stockout">733$</span>  <span className="stockin">| In Stock</span></p>
                </div>
                <div className="sizePart">
                    <div className="flexflex">
                        <div className="sizePart1">
                        <p className="sizep ">Size</p>
                        <div className="centered">
                            <button className="fourteen "><p className="any">40</p></button>
                            <img className="bottomline" src={bottomLine}/>
                        </div>
                    </div>
                    {setButton &&
                       <div className="sizePart2">
                        <p className="sizep ">Color</p>
                        <div className="centered">
                            <button className="emptyButton"></button>
                            <img className="bottomline" src={bottomLine}/>
                        </div>
                    </div> 
                    }
                    
                     
                    <div className="sizePart3">
                        <div className="encrease">
                            <p className="sizep1">QTY</p>
                             {/* <button className="minusB"><img src={cixilsin}/></button> */}
                        </div>
                        <div className="numbers">
                              <p>1</p>
                        </div>
                           
                             <div className="decrease">
                               {/* <button className="plusB"><img src={ustegel}/></button>   */}
                             </div>
                         
                    </div>   
                     <div className={`sizePart4 ${!setButton && 'sizePart4distance'} `}>
                           <img className="hearheart" src={sizeHeart}/>
                           <img src={sizeDelete}/>
                    </div>
                    </div>
                   
                    
                </div>
            </div>

        </div>
   
        </div>
    )
}
export default ShoppingBag