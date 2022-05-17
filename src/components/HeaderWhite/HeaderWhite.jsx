import React,{useRef,useState,useEffect} from "react";
import {Link} from "react-router-dom"
import liOne from '../../Images/Group 125.svg';
import liTwo from '../../Images/Vector.svg';
import liFour from '../../Images/Group 123.svg';
import liFive from '../../Images/Group 124.svg';
import liSix from '../../Images/Group.svg';
import small from '../../Images/smallScreen1.svg';
import twoLine from '../../Images/twoLine.svg';
import insta from '../../Images/pp.svg'
import '../HeaderWhite/HeaderWhite.css'
import Data from "../../Data.json"
const HeaderWhite = ({ dimensions }) => {

    const searchRef=useRef();
    const inputRef=useRef();
    const closeSearchRef=useRef();
    const lupaRef=useRef();
    const filetedContRef=useRef();

    const [value,setValue]=useState("");
    const [filteredShoes,setFilteredShoes]=useState();
    const [shoes,setShoes]=useState();
    const [map,setMap]=useState();

    

    const openInput=()=>{
        inputRef.current.style.opacity="1"
        inputRef.current.style.width="100%"
        closeSearchRef.current.style.display="block"
        lupaRef.current.style.display="none"
        
    }

    const closeInput=()=>{
        // closeSearchRef.current.style.color="red"
        // closeSearchRef.current.style.opacity="0"
        closeSearchRef.current.style.display="none"
        inputRef.current.style.width="0"
       
       

    }

    const searchValue=(e)=>{
        setValue(e.target.value)
        console.log(value)
         if(value.length > 0){
            filetedContRef.current.style.display="none";
         }else{
            filetedContRef.current.style.display="block";

         }

       
    }

    useEffect(()=>{
        
        let result=[]

       result= Data.filter(shoes =>shoes.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) ;

          setFilteredShoes(result)
    },[value,shoes])


    
    return <>

        {(dimensions.width > 800) && <div className="header">
            <ul className="header_ul_one" id="white">
               <a href="https://www.instagram.com/danilov_baku/?hl=en" target="_blank"> <li><img src={liOne} /></li></a>
                <a href="https://www.facebook.com/Danilov-Shoes-2000969736610486/" target="_blank"><li><img className="insta" src={insta} /></li></a>
                <Link to="/about">
                 <li className="text">About us</li>
                </Link>
               <Link to="/">
                <li className="text">Man</li>
                </Link>
            </ul>
            <img src={liFour} />

            <ul className="header_ul_two "  id="white">
                <Link to="/newIn">
                <li className="text">What’s New</li>
                </Link>
                <Link to="/signUp">
                <li className="text" >Profile</li>
                </Link>

                <div className="search" ref={searchRef} onClick={openInput}> 
                <li ref={lupaRef}><img src={liFive} /></li>   
                <li className="closeSearch" ref={closeSearchRef} onClick={closeInput}>X</li>      

                <div className="elebele">
                     <input placeholder="search" type="search" ref={inputRef} className="searchInput" value={value} onChange={searchValue}></input>  
                             <div className="fileteredShoes-cont" ref={filetedContRef}>


                                {filteredShoes && filteredShoes.map((e)=>{
                                    return(
                                     <p > {e.name}</p>
                                    )
                                })}

                           </div>       
                     </div>

                </div>  
               

              
                
              


                <li ><img src={liSix} /></li>

            </ul>


        </div>}
        {(dimensions.width < 800) && <div className="header">
            <div className="wtdh">
               <ul className="header_ul_one">
                 
                <li><img src={twoLine} /></li>
              
            </ul>
            <ul className="header_ul_one">
                 
                 <li><img src={twoLine} /></li>
               
             </ul>   
            </div>
          
            <img className="sizeImg" src={liFour} />

            <ul className="header_ul_two">
                <li ><img src={small} /></li>

            </ul>
        </div>}
    </>
}
export default HeaderWhite