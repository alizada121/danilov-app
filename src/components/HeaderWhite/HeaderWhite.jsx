import React,{useRef,useState,useEffect} from "react";
import {Link} from "react-router-dom"
import insta from '../../assets/insta.svg';
import liTwo from '../../Images/Vector.svg';
import liFour from '../../Images/Group 123.svg';
import liFive from '../../Images/Group 124.svg';
import liSix from '../../Images/Group.svg';
import small from '../../Images/smallScreen1.svg';
import twoLine from '../../Images/twoLine.svg';
import fb from '../../assets/fb.svg';
import '../HeaderWhite/HeaderWhite.css'
import Data from "../../Data.json"

import useOutsideClick from "../useOutsideClick"
import HamMenu from "../Hamburger/HamMenu";
const HeaderWhite = ({ dimensions }) => {

    const searchRef=useRef();
    const inputRef=useRef();
    const closeSearchRef=useRef();
    const lupaRef=useRef();
    const filetedContRef=useRef();
    const profileRef=useRef();
    const newinRef=useRef();
    const refRef=useRef();
    const absoluteLupa=useRef();
    const hamburgerRef=useRef();

    const activeHeaderRef=useRef();
    const activeSearchRef=useRef();



    const [value,setValue]=useState('');
    const [filteredShoes,setFilteredShoes]=useState();
    const [shoes,setShoes]=useState();
    const [map,setMap]=useState();
    const [activeHeader,setActiveHeader]=useState(true);
    const [activeInput,setActiveInput]=useState(true);
    const [activeWidth,setActiveWidth]=useState(true)
    const [openedMenu,setOpenedMenu]=useState(false)
    const [filtered,setFiltered]=useState(false)

    useOutsideClick(refRef, () => {
    //    inputRef.current.style.display="none";
    //    filetedContRef.current.style.display="none"
    //    absoluteLupa.current.style.display="none"
     
       console.log("salamsss")
       setActiveHeader(true)
       setActiveInput(true)

       setActiveWidth(true)
    //    setFiltered(false)
       setValue('')
       
      
       

       
       
      
        

      });

    const openInput=()=>{

         setActiveHeader(false)
        setActiveInput(false)
        setActiveWidth(false)
        
    
        console.log(activeHeader)

        
    }

   

    const searchValue=(e)=>{
         setValue(e.target.value)
    }

    useEffect(()=>{
        
        let result=[]
        if(value.length > 0) {
            result = Data.filter(shoes =>shoes.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) ;
            // filetedContRef.current.style.display="block";
            setFiltered(false)
        }else {
            result = []
            
            // filetedContRef.current.style.display="none";
            setFiltered(true)
        }
          setFilteredShoes(result)
    },[value])

    const openMenu=()=>{

        if(!openedMenu){
            setOpenedMenu(true)
            document.body.style.overflow="hidden"
            hamburgerRef.current.style.opacity="0"

        }else{
            setOpenedMenu(false)
            document.body.style.overflow="auto"
            hamburgerRef.current.style.opacity="1"
        }
        
        console.log(openedMenu)

    }


    
    return <>

        {(dimensions.width > 800) && <div className="header"    >
            <ul className="header_ul_one" id="white">
               <a href="https://www.instagram.com/danilov_baku/?hl=en" target="_blank"> <li><img src={insta} /></li></a>
                <a href="https://www.facebook.com/Danilov-Shoes-2000969736610486/" target="_blank"><li><img  style={{width:"19px", height:"19px",marginRight:"50px"}} src={fb} /></li></a>
                <Link to="/about">
                 <li className="text">About us</li>
                </Link>
               <Link to="/">
                <li className="text">Man</li>
                </Link>
            </ul>

            <Link to="/">
             <img src={liFour} className="logoHeader" />
            </Link>
          


            <ul  className={!activeWidth? "active-width" : "header_ul_two"} id="white" ref={refRef} >


                <div    className={activeHeader ? "active-header" : "deactive-header"} >


                
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

               
                <div className="elebele" >
                     <input placeholder="Search" type="text" ref={inputRef} className="searchInput" value={value} onChange={searchValue}>
                     
                        </input> 
                        <div className="input-lupa" ref={absoluteLupa}><img src={liFive} /></div> 
                   
                             <div id="filteredShoes"className={!filtered ? "filtered" : "unfiltered"}  ref={filetedContRef}>


                                 {filteredShoes && filteredShoes.map((e)=>{
                                    return(
                                     <p > {e.name}</p>
                                    )
                                })}

                           </div>       
                     </div>
             </div>
                
               

              
                
              


                <Link to="/bag">
                 <div  className='shopbag'><img src={liSix}/></div>
                </Link>
               


            </ul>


        </div>}
        {(dimensions.width < 800) && <div className="header">
            <div className="hamburger" ref={hamburgerRef} onClick={openMenu}>
               <div className="header_ul_one">
                 
                <img src={twoLine} />
              
                </div>

                 <div className="header_ul_one">
                 
                 <div><img src={twoLine} /></div>
               
                 </div>   
            </div>
          
            <img className="sizeImg" src={liFour} />
            
            <Link to="/bag">
            <div className="header_ul_two">
                <div ><img src={small} /></div>

            </div>
            </Link>
            
        </div>}

        <div className={openedMenu ? "active-ham" : "deactive-ham"}>
            <HamMenu/>

        </div>
    </>
}
export default HeaderWhite