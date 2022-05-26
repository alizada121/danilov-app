import React,{useRef,useState,useEffect} from "react";
import {Link} from "react-router-dom"
import liOne from '../../Images/Group 125.svg';
import liTwo from '../../Images/Vector.svg';
import liFour from '../../Images/Group 123.svg';
import liFive from '../../Images/Group 124.svg';
import liSix from '../../Images/Group.svg';
import small from '../../Images/smallScreen1.svg';
import twoLine from '../../Images/twoLine.svg';
import insta from '../../Images/facee.png'
import '../HeaderWhite/HeaderWhite.css'
import Data from "../../Data.json"
const HeaderWhite = ({ dimensions }) => {

    const searchRef=useRef();
    const inputRef=useRef();
    const closeSearchRef=useRef();
    const lupaRef=useRef();
    const filetedContRef=useRef();
    const profileRef=useRef();
    const newinRef=useRef();
    const ulTwoRef=useRef();

    const activeHeaderRef=useRef();
    const activeSearchRef=useRef();



    const [value,setValue]=useState('');
    const [filteredShoes,setFilteredShoes]=useState();
    const [shoes,setShoes]=useState();
    const [map,setMap]=useState();
    const [activeHeader,setActiveHeader]=useState(false);
    const [activeInput,setActiveInput]=useState(true);
    const [activeWidth,setActiveWidth]=useState(true)

    

    const openInput=()=>{
        setActiveHeader(!activeHeader)
        setActiveInput(!activeInput)
        setActiveWidth(!activeInput)
        



    //    setActiveHeader(false)
        // inputRef.current.style.opacity="1"
        // inputRef.current.style.width="100%"
        
        // lupaRef.current.style.display="none"
        // newinRef.current.style.display="none"
        // profileRef.current.style.display="none"
        
    }

    const closeInput=()=>{
        // closeSearchRef.current.style.color="red"
        // closeSearchRef.current.style.opacity="0"
        // closeSearchRef.current.style.display="none"
        // inputRef.current.style.width="0"


       
       

    }

    const searchValue=(e)=>{
         setValue(e.target.value)
    }

    useEffect(()=>{
        
        let result=[]
        if(value.length > 0) {
            result = Data.filter(shoes =>shoes.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) ;
            filetedContRef.current.style.display="block";
        }else {
            result = []
            
            filetedContRef.current.style.display="none";
        }
          setFilteredShoes(result)
    },[value])


    
    return <>

        {(dimensions.width > 800) && <div className="header"   onClick={closeInput} >
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

            <Link to="/">
             <img src={liFour} />
            </Link>
          


            <ul  className={!activeWidth? "active-width" : "header_ul_two"} id="white" ref={ulTwoRef}>


                <div    className={!activeHeader ? "active-header" : "deactive-header"} >


                
                  <Link to="/newIn" ref={newinRef}>
                  <li className="text" >What’s New</li>
                  </Link>
                  <Link to="/signUp">
                  <li className="text" ref={profileRef}>Profile</li>
                  </Link>

                  <div className="search" ref={searchRef} onClick={openInput}> 
                  <li ref={lupaRef}><img src={liFive} /></li>   
                </div>  
                </div>

                <div className={!activeInput ? "active-search" : "deactive-search"} >

               
                <div className="elebele">
                     <input placeholder="Search" type="search" ref={inputRef} className="searchInput" value={value} onChange={searchValue}>
                     
                        </input> 
                        <div className="input-lupa"><img src={liFive} /></div> 
                   
                             <div className="fileteredShoes-cont" ref={filetedContRef}>


                                 {filteredShoes && filteredShoes.map((e)=>{
                                    return(
                                     <p > {e.name}</p>
                                    )
                                })}

                           </div>       
                     </div>
             </div>
                
               

              
                
              


                <Link to="/bag">
                 <li ><img src={liSix} /></li>
                </Link>
               


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